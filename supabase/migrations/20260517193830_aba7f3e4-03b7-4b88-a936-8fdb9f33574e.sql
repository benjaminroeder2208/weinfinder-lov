CREATE TABLE public.pilot_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  shop_url text,
  phone text,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.pilot_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a pilot request"
  ON public.pilot_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);