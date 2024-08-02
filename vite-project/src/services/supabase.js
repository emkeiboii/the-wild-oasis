import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://upwozmhtthvdetztnxnw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwd296bWh0dGh2ZGV0enRueG53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MDgyOTcsImV4cCI6MjAzMTE4NDI5N30.W6WJ41NJGamtCj-5lzkth-tAaktIijeNwX0kDy3xe7E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
