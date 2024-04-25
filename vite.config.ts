import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

/*
    See https://vitejs.dev/guide/env-and-mode.html
    See https://vitejs.dev/config/
 */

function _initConfig(envProperties: object) {
    // @ts-ignore
    const contextPath = envProperties.VITE_APP_CONTEXT_PATH || '/';
    // @ts-ignore
    const apiPath = envProperties.VITE_APP_API_PATH || '/';

    // @ts-ignore
    const devPort = envProperties.VITE_APP_DEV_PORT;
    // @ts-ignore
    const devBackendUrl = envProperties.VITE_APP_DEV_BACKEND_URL;

    return {
        plugins: [vue(), vueJsx()],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        build: {
            assetsDir: 'assets',
            outDir: 'target/dist'
        },
        base: contextPath,
        server: {
            port: devPort,
            proxy: {
                [apiPath]: {
                    target: devBackendUrl, // this configuration needs to correspond to the Spring Boot backends' application.properties server.port
                    ws: true,
                    changeOrigin: true
                }
            }
        }
    };
}

export default defineConfig((env) => {
    const envProperties = loadEnv(env.mode, process.cwd());

    return _initConfig(envProperties);
});

export { _initConfig };
