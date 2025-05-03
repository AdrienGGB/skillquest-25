-- Enable RLS on all tables
ALTER TABLE public.test ENABLE ROW LEVEL SECURITY;

-- Create policies for the test table
CREATE POLICY "Users can view their own data" ON public.test
  FOR SELECT USING (auth.uid() = '333a2efc-1990-43d0-99b8-4e72b2f01918');

CREATE POLICY "Users can insert their own data" ON public.test
  FOR INSERT WITH CHECK (auth.uid() = '333a2efc-1990-43d0-99b8-4e72b2f01918');

CREATE POLICY "Users can update their own data" ON public.test
  FOR UPDATE USING (auth.uid() = '333a2efc-1990-43d0-99b8-4e72b2f01918');

CREATE POLICY "Users can delete their own data" ON public.test
  FOR DELETE USING (auth.uid() = '333a2efc-1990-43d0-99b8-4e72b2f01918'); 