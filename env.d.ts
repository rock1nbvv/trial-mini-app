/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_CONTEXT_PATH: string;
    readonly VITE_APP_API_PATH: string;
    readonly VITE_APP_DEV_PORT: string;
    readonly VITE_APP_DEV_BACKEND_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}