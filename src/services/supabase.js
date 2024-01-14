import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://uruyqkjxhemvrazuhgor.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVydXlxa2p4aGVtdnJhenVoZ29yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3OTcwNzMsImV4cCI6MjAyMDM3MzA3M30.eioqygI_6i-wN3xyFSMU52hl5lJj9jP5HOpDcpXzSYw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
