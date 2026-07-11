
-- Unschedule cron jobs (if any)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM cron.job WHERE jobname = 'process-email-queue') THEN
    PERFORM cron.unschedule('process-email-queue');
  END IF;
  IF EXISTS (SELECT 1 FROM cron.job WHERE jobname = 'apply-data-retention') THEN
    PERFORM cron.unschedule('apply-data-retention');
  END IF;
EXCEPTION WHEN OTHERS THEN NULL;
END $$;

-- Drop pgmq queues
DO $$
BEGIN
  PERFORM pgmq.drop_queue('auth_emails');
EXCEPTION WHEN OTHERS THEN NULL;
END $$;
DO $$
BEGIN
  PERFORM pgmq.drop_queue('transactional_emails');
EXCEPTION WHEN OTHERS THEN NULL;
END $$;
DO $$
BEGIN
  PERFORM pgmq.drop_queue('auth_emails_dlq');
EXCEPTION WHEN OTHERS THEN NULL;
END $$;
DO $$
BEGIN
  PERFORM pgmq.drop_queue('transactional_emails_dlq');
EXCEPTION WHEN OTHERS THEN NULL;
END $$;

-- Drop public tables
DROP TABLE IF EXISTS public.leads CASCADE;
DROP TABLE IF EXISTS public.pilot_requests CASCADE;
DROP TABLE IF EXISTS public.email_send_log CASCADE;
DROP TABLE IF EXISTS public.email_send_state CASCADE;
DROP TABLE IF EXISTS public.email_unsubscribe_tokens CASCADE;
DROP TABLE IF EXISTS public.suppressed_emails CASCADE;

-- Drop public functions
DROP FUNCTION IF EXISTS public.apply_data_retention() CASCADE;
DROP FUNCTION IF EXISTS public.email_queue_wake() CASCADE;
DROP FUNCTION IF EXISTS public.email_queue_dispatch() CASCADE;
DROP FUNCTION IF EXISTS public.delete_email(text, bigint) CASCADE;
DROP FUNCTION IF EXISTS public.enqueue_email(text, jsonb) CASCADE;
DROP FUNCTION IF EXISTS public.read_email_batch(text, integer, integer) CASCADE;
DROP FUNCTION IF EXISTS public.move_to_dlq(text, text, bigint, jsonb) CASCADE;
