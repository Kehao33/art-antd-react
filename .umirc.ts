import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'art-antd-react',
  favicon: '/logo.ico',
  logo: '/logo.png',
  base: '/art-antd-react/',
  publicPath: '/art-antd-react/',
  outputPath: 'docs-dist',
  webpack5: {},
  dynamicImport: {},
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  mode: 'site',
  // more config: https://d.umijs.org/config
  mfsu: {},
  navs: [
    {
      title: 'components',
      path: '/components',
    },
    {
      title: 'hooks',
      path: '/hooks',
    },
    {
      title: 'changelog',
      path: '/changelog',
    },
    {
      title: 'Gitee',
      path: 'https://gitee.com/quankehao/art-antd-react',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/Kehao33/art-antd-react',
    },
  ],
  alias: {
    // 'art-antd-react': require('path').resolve('src', 'index.ts'),
  },
});
