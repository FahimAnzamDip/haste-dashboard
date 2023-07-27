import path from 'node:path';
import { normalizePath } from 'vite';

export default {
    plugins: [],
    root: normalizePath(path.resolve(__dirname, 'src')),
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                buttons: normalizePath(
                    path.resolve(__dirname, 'src/pages/components/buttons.html')
                ),
                forms: normalizePath(
                    path.resolve(__dirname, 'src/pages/components/forms.html')
                ),
                modals: normalizePath(
                    path.resolve(__dirname, 'src/pages/components/modals.html')
                ),
                notifications: normalizePath(
                    path.resolve(
                        __dirname,
                        'src/pages/components/notifications.html'
                    )
                ),
                typography: normalizePath(
                    path.resolve(
                        __dirname,
                        'src/pages/components/typography.html'
                    )
                ),
                not_found: normalizePath(
                    path.resolve(__dirname, 'src/pages/examples/404.html')
                ),
                internal_error: normalizePath(
                    path.resolve(__dirname, 'src/pages/examples/500.html')
                ),
                forgot_password: normalizePath(
                    path.resolve(
                        __dirname,
                        'src/pages/examples/forgot-password.html'
                    )
                ),
                lock: normalizePath(
                    path.resolve(__dirname, 'src/pages/examples/lock.html')
                ),
                reset_password: normalizePath(
                    path.resolve(
                        __dirname,
                        'src/pages/examples/reset-password.html'
                    )
                ),
                signin: normalizePath(
                    path.resolve(__dirname, 'src/pages/examples/sign-in.html')
                ),
                signup: normalizePath(
                    path.resolve(__dirname, 'src/pages/examples/sign-up.html')
                ),
                starter: normalizePath(
                    path.resolve(__dirname, 'src/pages/examples/starter.html')
                ),
                bootstrap_tables: normalizePath(
                    path.resolve(
                        __dirname,
                        'src/pages/tables/bootstrap-tables.html'
                    )
                ),
                datatables: normalizePath(
                    path.resolve(__dirname, 'src/pages/tables/datatables.html')
                ),
                index: normalizePath(path.resolve(__dirname, 'src/index.html')),
            },
        },
    },
    base: '/haste-dashboard/',
    server: {
        port: 3030,
    },
};
