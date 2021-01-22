const env = process.env.BABEL_ENV

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        modules: env === 'es' ? false : 'auto',
      },
    ],
    '@babel/preset-react',
    ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        useESModules: env === 'es' ? true : false,
      },
    ],
    'transform-class-properties',
    ['import', { libraryName: 'antd' }, 'antd'],
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'lodash',
    ],
    [
      'import',
      {
        libraryName: '@ant-design/icons',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      '@ant-design/icons',
    ],
  ],
}
