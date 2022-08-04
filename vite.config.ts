import { loadEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createHtmlPlugin } from "vite-plugin-html";
import { resolve, sep } from "path";

function pathResolve(dir: string): string {
	return resolve(process.cwd(), ".", dir);
}

export default ({ command, mode }): UserConfig => {
	const root = process.cwd();
	const env = loadEnv(mode, root);
	const { VITE_TITLE, VITE_PORT } = env;

	return {
		server: {
			port: Number(VITE_PORT),
		},
		plugins: [
			vue(),
			createHtmlPlugin({
				minify: true,
				entry: "src/main.ts",
				template: "index.html",
				inject: {
					data: { title: VITE_TITLE },
				},
			}),
		],
		resolve: {
			alias: [
				{
					find: /@\//,
					replacement: `${pathResolve("src")}${sep}`,
				},
			],
		},
	};
};
