import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'art-antd-react',
  favicon: '/icons/logo.ico',
  logo: '/icons/logo.png',

  outputPath: '/docs-dist',
  base: '/docs-dist',
  publicPath: './docs-dist/',

  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  mode: 'site',
  // more config: https://d.umijs.org/config
  antd: {},
  mfsu: {},
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'Gitee',
      path: 'https://gitee.com/quankehao/art-antd-react',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/Kehao33/art-antd-react',
    },
  ],
});
