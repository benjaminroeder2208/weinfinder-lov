SELECT pgmq.delete('transactional_emails', 3);
SELECT pgmq.delete('transactional_emails', 4);
UPDATE email_send_state SET retry_after_until = NULL, updated_at = now() WHERE id = 1;