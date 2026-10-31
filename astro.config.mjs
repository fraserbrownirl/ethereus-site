// @ts-check
import { defineConfig } from "astro/config";

// Static site — no SSR. Change `site` when domain is final.
export default defineConfig({
  site: "https://ethereus.xyz",
  output: "static",
});
