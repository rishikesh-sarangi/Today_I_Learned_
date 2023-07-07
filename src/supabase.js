import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://baoemjtzoeftizntijpn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhb2VtanR6b2VmdGl6bnRpanBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAzNTM3NTIsImV4cCI6MTk5NTkyOTc1Mn0.exTiiQSFGC97cMXX6eAQfrAQ0Xtrhodw3hMwqEjfJYU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
