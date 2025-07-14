import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel/serverless"
import tailwindcss from "@tailwindcss/vite"
import sitemap from "@astrojs/sitemap"
import svelte from "@astrojs/svelte"

// https://astro.build/config
export default defineConfig({
	publicDir: "public",
	output: "server",
	adapter: vercel(),
	site: "https://astrowiki.vercel.app",
	integrations: [sitemap(), svelte()],
	vite: {
		plugins: [tailwindcss({ config: "./tailwind.config.cjs" })],
	},
})
