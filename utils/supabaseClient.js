import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ybpyhghnonuhblljvlns.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTM0MDMzMiwiZXhwIjoxOTU0OTE2MzMyfQ.WzlhBbzYhmpsMtEDxsQ2zO3jmwP1jRFGzKToMZN-WpM"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

