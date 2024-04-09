import { defineConfig } from "vite";

export default defineConfig({
    base: "https://meprz.github.io/2d-portfolio-game/",
    build: {
        minify: "terser",
    },
});
