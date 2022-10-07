import pkg from './package.json'
import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import svelte from 'rollup-plugin-svelte'
import autoPreprocess from 'svelte-preprocess'
import { terser } from 'rollup-plugin-terser'

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, (m) => m.toUpperCase())
  .replace(/-\w/g, (m) => m[1].toUpperCase())

export default {
  input: 'index.mjs',
  output: [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'umd', name },
    { file: pkg.main.replace('.js', '.min.js'), format: 'iife', name, plugins: [terser()] },
  ],
  plugins: [
    svelte({
      emitCss: true, // give component style to postcss() for processing
      preprocess: autoPreprocess(),
      compilerOptions: {
        customElement: true,
      },
    }),
    resolve(),
    postcss({
      extract: true, // create a css file alongside the output.file
      use: {
        sass: {
          includePaths: ['node_modules'],
        },
      },
    }),
  ],
}
