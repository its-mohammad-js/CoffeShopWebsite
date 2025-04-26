import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://brgcjextuxehgykzniwp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyZ2NqZXh0dXhlaGd5a3puaXdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1MTIzNDEsImV4cCI6MjA2MTA4ODM0MX0.gHfAKGQJj_lT0wew0V4Qv-RgnFu_nxZL_OuTALIr9uA";

export const supabase = createClient(supabaseUrl, supabaseKey);
