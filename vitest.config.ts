import {fileURLToPath} from 'node:url';
import {mergeConfig, defineConfig, UserConfig} from 'vite';
import {configDefaults} from 'vitest/config';
import {_initConfig} from './vite.config';


export default mergeConfig(
    _initConfig({}),
    defineConfig({
        test: {
            environment: 'jsdom',
            exclude: [...configDefaults.exclude, 'e2e/*'],
            root: fileURLToPath(new URL('./', import.meta.url)),
            transformMode: {
                web: [/\.[jt]sx$/]
            }
        }
    } as UserConfig)
);
