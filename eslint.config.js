import js from '@eslint/js';
import globals from 'globals';
import {defineConfig} from 'eslint/config';

export default defineConfig([
    {
        ignores: ['dist', 'node_modules'],
    },
    {
        files: ['src/**/*.{js,mjs,cjs}'],
        extends: [js.configs.recommended],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'off',
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            indent: ['error', 2],
            'comma-dangle': ['error', 'always-multiline'],
            eqeqeq: ['error', 'always'],
        },
    },
    {
        files: ['vite.config.js', 'eslint.config.js', 'stylelint.config.mjs'],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
]);