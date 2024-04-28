import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        rollupOptions: {
            external: [
                'sweetalert2',
                'react-datepicker',
                'gsap',
                'framer-motion',
                'react-icons/md',
                'papaparse',
                'react-icons/fa',
                'react-datepicker/dist/react-datepicker.css',
            ],
        },
    },
});
