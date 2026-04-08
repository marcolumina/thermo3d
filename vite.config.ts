import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const fallbackSupabaseUrl = process.env.VITE_SUPABASE_URL ?? "https://oxtytklkmxupsfudnmbk.supabase.co";
const fallbackSupabasePublishableKey =
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94dHl0a2xrbXh1cHNmdWRubWJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzMjg2NDQsImV4cCI6MjA5MDkwNDY0NH0.Wi3V9Xxlv99kVmf5JATZbY8TlPj7WGmnnlTihDFze_A";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  define: {
    "import.meta.env.VITE_SUPABASE_URL": JSON.stringify(fallbackSupabaseUrl),
    "import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY": JSON.stringify(fallbackSupabasePublishableKey),
    "import.meta.env.VITE_SUPABASE_ANON_KEY": JSON.stringify(fallbackSupabasePublishableKey),
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
