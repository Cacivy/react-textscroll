// rollup.config.js
import typescript from 'typescript'
import rollupTypescript from 'rollup-plugin-typescript'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import uglify from 'rollup-plugin-uglify'

const dev = 'development'
const prod = 'production'

function parseNodeEnv(nodeEnv) {
  if (nodeEnv === prod || nodeEnv === dev) {
    return nodeEnv
  }
  return dev
}

const nodeEnv = parseNodeEnv(process.env.NODE_ENV)
const exampleBasicPath = './example/'
const exampleBundle = exampleBasicPath + '/bundle.js'
const port = 3005

const plugins = [
  replace({
    // The react sources include a reference to process.env.NODE_ENV so we need to replace it here with the actual value
    'process.env.NODE_ENV': JSON.stringify(nodeEnv)
  }),
  rollupTypescript({ typescript, importHelpers: true })
]

const pluginsExample = plugins.concat([
  // nodeResolve makes rollup look for dependencies in the node_modules directory
  nodeResolve(),
  commonjs({
    // All of our own sources will be ES6 modules, so only node_modules need to be resolved with cjs
    include: 'node_modules/**',
    namedExports: {
      // The commonjs plugin can't figure out the exports of some modules, so if rollup gives warnings like:
      // ⚠️   'render' is not exported by 'node_modules/react-dom/index.js'
      // Just add the mentioned file / export here
      'node_modules/react-dom/index.js': ['render'],
      'node_modules/react/react.js': ['Component', 'PropTypes', 'createElement']
    }
  })
])

if (nodeEnv === dev) {
  // For playing around with just frontend code the serve plugin is pretty nice.
  // We removed it when we started doing actual backend work.
  pluginsExample.push(
    serve({
      contentBase: './example/',
      port,
      historyApiFallback: true,
      open: true
    })
  )
  pluginsExample.push(livereload({
    watch: exampleBundle
  }))
}

if (nodeEnv === prod) {
  plugins.push(uglify())
}

export default [
  {
    input: 'src/index.tsx',
    output: {
      file: 'dist/bundle.js',
      format: 'umd',
      name: 'TextScroll'
    },
    watch: {
      include: './src/**'
    },
    plugins
  },
  {
    input: exampleBasicPath + 'index.tsx',
    output: {
      file: exampleBundle,
      format: 'iife',
      name: 'TextScroll'
    },
    watch: {
      include: ['./src/**', exampleBasicPath + '**']
    },
    plugins: pluginsExample
  }
]
