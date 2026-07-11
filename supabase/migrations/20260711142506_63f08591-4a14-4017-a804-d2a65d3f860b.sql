
CREATE TABLE public.pilot_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  shop_url TEXT,
  phone TEXT,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT ALL ON public.pilot_requests TO service_role;
ALTER TABLE public.pilot_requests ENABLE ROW LEVEL SECURITY;
-- No policies: only service_role (edge function) can access; no client access.
