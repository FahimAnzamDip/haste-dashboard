import path from 'node:path';
import { normalizePath } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default {
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: './pages',
                    dest: 'pages',
                },
            ],
        }),
    ],
    root: normalizePath(path.resolve(__dirname, 'src')),
    build: {
        outDir: '../dist',
    },
    base: '/haste-dashboard/',
    server: {
        port: 3030,
    },
};
