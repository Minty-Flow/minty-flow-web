import path from "node:path";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
	base: "/",
	plugins: [
        tailwindcss(),
        react(),
        babel({ presets: [reactCompilerPreset()] }),
        cloudflare()
    ],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});