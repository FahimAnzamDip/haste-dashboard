import path from 'node:path';
import { normalizePath } from 'vite';

export default {
    root: normalizePath(path.resolve(__dirname, 'src')),
    build: {
        outDir: '../dist',
    },
    base: '/haste-dashboard/',
    server: {
        port: 3030,
    },
    plugins: [],
};
