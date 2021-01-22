import { defineConfig } from 'dumi'
import path from 'path'

// more config: https://d.umijs.org/config
export default defineConfig({
  title: 'AT Console Components',
  logo: '/logo.png',
  favicon: '/favicon.ico',
  outputPath: 'site',
  resolve: {
    includes: ['components'],
  },
  alias: {
    'at-console-components': path.resolve(__dirname, './components'),
  },
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: 'at-console-components',
        libraryDirectory: '',
        style: true,
      },
    ],
  ],
})
