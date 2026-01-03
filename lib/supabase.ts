import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log("DEBUG ENV");
console.log("SUPABASE_URL:", supabaseUrl);
console.log("SUPABASE_SERVICE_ROLE_KEY:", !!supabaseServiceKey);

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error("Supabase environment variables are missing");
}

export const supabase = createClient(
  supabaseUrl,
  supabaseServiceKey
);
