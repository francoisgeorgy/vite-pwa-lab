# PWA with Vite tool

https://vite-plugin-pwa.netlify.app/

## Basic React app

Create the project scaffolding:

    npm init vite
    cd vite-pwa-lab/
    pnpm install

Basic test:

    pnpm dev

## PWA

    pnpm i vite-plugin-pwa -D
    pnpm i workbox-window -D
    pnpm i @rollup/plugin-replace -D

Test PWA:

    pnpm run build && pnpm run serve

https:

https://vite-plugin-pwa.netlify.app/guide/testing.html#testing-service-worker-over-https


    pnpm i https-localhost -D

    pnpm run build && pnpm run https-preview


---

## Errors and warning:

If:

    WARN @rollup/plugin-replace: @rollup/pluginutils@3.1.0 requires a peer of rollup@^1.20.0||^2.0.0 but none was installed.
    WARN @rollup/plugin-replace@3.0.0 requires a peer of rollup@^1.20.0 || ^2.0.0 but none was installed.

Do:

    pnpm install rollup@^1.20.0||^2.0.0 -D


