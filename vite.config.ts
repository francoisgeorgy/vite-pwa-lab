import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'
import replace from '@rollup/plugin-replace'

// https://vitejs.dev/config/
// @ts-ignore
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
            includeAssets: [
                'favicon.svg',
                'acme/*'
            ],
            manifest: {
                name: 'Vite PWA Lab',
                short_name: 'Vite PWA Lab',
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
            preventAssignment: true,
            '__DATE__': new Date().toISOString()
        })
    ]
})

