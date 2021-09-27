import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'
import replace from '@rollup/plugin-replace'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        sourcemap: process.env.SOURCE_MAP === 'true',
    },
    base: '/lab-pwa/',
    plugins: [
        react(),
        VitePWA({
            mode: 'development',
            base: '/lab-pwa/',
            includeAssets: ['favicon.svg'],
            manifest: {
                name: 'PWA Basic',
                short_name: 'PWA Basic',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'pwa-192x192.png', // <== don't add slash, for testing
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/pwa-512x512.png', // <== don't remove slash, for testing
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png', // <== don't add slash, for testing
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
            },
        }),
        replace({
            __DATE__: new Date().toISOString(),
            preventAssignment: true
        })
    ]
})

