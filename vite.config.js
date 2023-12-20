import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import svgr from '@svgr/rollup'
import autoprefixer from 'autoprefixer'
import path from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [react(), vike({ prerender: true }), svgr({ exportType: 'named' })],
  resolve: {
    alias: {
      '#': '/src'
    }
  },
  publicDir: 'src/public',
  build: {
    rollupOptions: {
      assetFileNames: `assets/[name].[ext]`
    }
  },
  css: {
    modules:
      mode === 'development'
        ? {
            generateScopedName: (name, filename, css) => {
              const index = css.indexOf(`.${name}`)
              const line = css.slice(0, index).split(/[\r\n]/).length
              const file = path.basename(filename).split('.')[0]
              return `${file}_${name}_${line}`
            }
          }
        : {},
    postcss: {
      plugins: [autoprefixer]
    }
  }
}))
