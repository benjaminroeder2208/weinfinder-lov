
-- Remove cron job if present
DO $$ BEGIN
  PERFORM cron.unschedule('process-email-queue');
EXCEPTION WHEN OTHERS THEN NULL;
END $$;

-- Drop DB functions
DROP FUNCTION IF EXISTS public.email_queue_dispatch() CASCADE;
DROP FUNCTION IF EXISTS public.email_queue_wake() CASCADE;
DROP FUNCTION IF EXISTS public.enqueue_email(text, jsonb) CASCADE;
DROP FUNCTION IF EXISTS public.read_email_batch(text, integer, integer) CASCADE;
DROP FUNCTION IF EXISTS public.delete_email(text, bigint) CASCADE;
DROP FUNCTION IF EXISTS public.move_to_dlq(text, text, bigint, jsonb) CASCADE;

-- Drop pgmq queues if present
DO $$ BEGIN
  PERFORM pgmq.drop_queue('auth_emails');
EXCEPTION WHEN OTHERS THEN NULL;
END $$;
DO $$ BEGIN
  PERFORM pgmq.drop_queue('transactional_emails');
EXCEPTION WHEN OTHERS THEN NULL;
END $$;

-- Drop tables
DROP TABLE IF EXISTS public.email_send_log CASCADE;
DROP TABLE IF EXISTS public.email_send_state CASCADE;
DROP TABLE IF EXISTS public.email_unsubscribe_tokens CASCADE;
DROP TABLE IF EXISTS public.suppressed_emails CASCADE;
DROP TABLE IF EXISTS public.pilot_requests CASCADE;
