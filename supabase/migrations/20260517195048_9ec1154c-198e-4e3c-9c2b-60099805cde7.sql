-- Enable pg_cron for scheduled deletions
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- SECURITY DEFINER function that applies all retention policies in one transaction.
CREATE OR REPLACE FUNCTION public.apply_data_retention()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Quiz-Leads: 24 Monate
  DELETE FROM public.leads
  WHERE created_at < now() - interval '24 months';

  -- Pilot-Anfragen: 24 Monate
  DELETE FROM public.pilot_requests
  WHERE created_at < now() - interval '24 months';

  -- E-Mail-Versandprotokoll: 90 Tage
  DELETE FROM public.email_send_log
  WHERE created_at < now() - interval '90 days';

  -- Verwendete Abmelde-Tokens: 90 Tage nach Nutzung; ungenutzte nach 12 Monaten
  DELETE FROM public.email_unsubscribe_tokens
  WHERE (used_at IS NOT NULL AND used_at < now() - interval '90 days')
     OR (used_at IS NULL AND created_at < now() - interval '12 months');
END;
$$;

REVOKE ALL ON FUNCTION public.apply_data_retention() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.apply_data_retention() TO postgres;

-- Re-schedule (idempotent): drop existing job if present, then create.
DO $$
DECLARE
  v_jobid bigint;
BEGIN
  SELECT jobid INTO v_jobid FROM cron.job WHERE jobname = 'apply-data-retention-daily';
  IF v_jobid IS NOT NULL THEN
    PERFORM cron.unschedule(v_jobid);
  END IF;
END $$;

SELECT cron.schedule(
  'apply-data-retention-daily',
  '15 3 * * *',
  $cron$ SELECT public.apply_data_retention(); $cron$
);