import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hlafvlrngevjbhugkhxh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsYWZ2bHJuZ2V2amJodWdraHhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwMjM5MzIsImV4cCI6MjAxMjU5OTkzMn0.2dGRFmtruQymMBRxUXa667q1czTuFLPXbEQ3WwYW7Dw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
