declare global {
	namespace NodeJS {
		interface ProcessEnv {
			VITE_PORT: string;
			VITE_TITLE: string;
			VITE_BASE: string;
		}
	}
}

export {};
