
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      // Proxy API requests to Supabase Edge Function during development
      '/api/send-email': {
        target: 'https://YOUR_SUPABASE_PROJECT_ID.supabase.co/functions/v1/send-email',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/send-email/, ''),
      },
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
