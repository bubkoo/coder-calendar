import config from '../../rollup-config'

export default (commandLineArgs) => {
  const { visualize = false } = commandLineArgs
  delete commandLineArgs.visualize
  return config({
    visualize,
    output: [
      {
        name: 'svg',
        format: 'umd',
        file: 'dist/index.js',
        sourcemap: true,
      },
    ],
  })
}
