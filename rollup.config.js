import babel from 'rollup-plugin-babel'

export default {
  input: 'index.js',
  output: {
    name: 'lilStore',
    file: 'dist/index.js',
    format: 'umd'
  },
  plugins: [
    babel()
  ]
}
