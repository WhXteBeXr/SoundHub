import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
    base: '/SoundHub/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});