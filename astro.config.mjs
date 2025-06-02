// config/astro/astro.config.mjs
import { defineConfig } from "astro/config";

// const isDev = process.env.NODE_ENV === "development";
// const isPreview = process.argv.includes("preview");
// const isGHPages = process.env.GITHUB_ACTIONS === "true"; // Автоопределение GitHub Actions

export default defineConfig({
    site: "https://web22des.github.io",
    base: "/proto-parsec/",
    trailingSlash: "ignore",
    //base: isDev || isPreview || !isGHPages ? "/" : "/astro-test-5/",
    //trailingSlash: "always",
    output: "static", // Явно указываем статический режим
});
