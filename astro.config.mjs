// config/astro/astro.config.mjs
import { defineConfig } from "astro/config";

// const isDev = process.env.NODE_ENV === "development";
// const isPreview = process.argv.includes("preview");
// const isGHPages = process.env.GITHUB_ACTIONS === "true"; // Автоопределение GitHub Actions

// Автоматически определяем режим (dev/prod) и GitHub Pages
const isDev = process.env.NODE_ENV === "development";
const isGHPages = process.env.GITHUB_ACTIONS === "true"; // GitHub Actions

export default defineConfig({
    site: "https://web22des.github.io",
    base: isDev ? "/" : "/proto-parsec/", // Локально "/", на GitHub "/proto-parsec/"
    trailingSlash: "always", // Добавляет "/" в конец URL
});
