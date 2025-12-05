import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://zvqqtsetchazwhzvhlnt.supabase.co';
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2cXF0c2V0Y2hhendoenZobG50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNDE3NDQsImV4cCI6MjA3OTYxNzc0NH0.wk7t8KniW8AM-bdoczW296z2dNph33blayU77cQv138';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
