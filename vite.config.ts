// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Cloudflare plugin disabled — we deploy on Netlify as a prerendered static site.
// All routes are crawled and emitted as HTML at build time; Netlify serves dist/client.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
    pages: [
      { path: "/" },
      { path: "/the-bone-trials" },
      { path: "/the-wife-of-war" },
      { path: "/about" },
      { path: "/vesserath" },
      { path: "/sitemap.xml" },
    ],
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
});
