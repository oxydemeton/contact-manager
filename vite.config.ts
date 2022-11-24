import postcss from './postcss.config.cjs';
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: {
        enabled: true
      },
      selfDestroying: true,
      manifest: {
        name: "Contact Manager",
        short_name: "Contacts",
        description: "A simple app to manage contacts and use them on any device.",
        theme_color: "#303033",
        background_color: "#303033",
        lang: "en",
        icons: [
          {
            src: 'Icon.png',
            sizes: '256x256',
            type: 'image/png',
            purpose: "any"
          },
          {
            src: 'Iconlowres.png',
            sizes: '128x128',
            type: 'image/png',
            purpose: "any"
          },
          {
            src: 'Iconhighres.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: "any"
          },
          {
            src: 'Icon.png',
            sizes: '256x256',
            type: 'image/png',
            purpose: "maskable"
          },
          {
            src: 'Icon.svg',
            sizes: 'any',
            type: 'image/svg',
            purpose: "any"
          },
          {
            src: 'splash_screen.png',
            size: '1024x768',
            type: 'image/png',
            purpose: 'any'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg, jpg}']//Add more Types if needed
      }
    })
    ],
  css:{
    postcss
  }
})
