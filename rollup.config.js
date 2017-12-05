import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import postcss from 'rollup-plugin-postcss'
import postcssModules from 'postcss-modules'
import serve from 'rollup-plugin-serve'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'

const cssExportMap = {}

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/main.js',
    format: 'iife',
    sourcemap: 'inline'
  },
  plugins: [ 
    postcss({
      extensions: ['.css'],
      plugins: [
        postcssModules({
          getJSON (id, exportTokens) {
            cssExportMap[camelCaseId(id)] = exportTokens
          }
        }),
      ],
      getExportNamed: false,
      getExport (id) {
        return cssExportMap[camelCaseId(id)]
      },
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    json(),
    eslint({
      exclude: ["src/**/*.css", "**/*.json"],
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    sourceMaps(),
    serve({
      contentBase: './',
      port: 10001, 
      historyApiFallback: true
    })
  ],
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**'
  }
};

function camelCaseId(id){
  return id.replace(camelCaseRegex, (g) => g[1].toUpperCase());
}

let camelCaseRegex = /-([a-z])/g
