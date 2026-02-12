import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import ViteSitemap from "vite-plugin-sitemap";
import reactsvgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		reactsvgr(),
		react(),
		tailwindcss(),
		ViteImageOptimizer({
			webp: { quality: 75 },
		}),
		ViteSitemap({
			hostname: "https://kretostan.com",
			outDir: "dist",
		}),
	],
	build: {
		sourcemap: true,
		rollupOptions: {
			output: {
				manualChunks: {
					react: ["react", "react-dom"],
				},
			},
		},
	},
});
