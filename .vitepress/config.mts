import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it';
import { defineConfig, UserConfig } from 'vitepress';
import { withSidebar } from 'vitepress-sidebar';
import { VitePressSidebarOptions } from 'vitepress-sidebar/types';

const vitePressOptions: UserConfig = {
  lang: 'zh-CN',
  title: '酒馆助手',
  description: '在SillyTavern中渲染前端界面和运行脚本',
  srcDir: 'src',
  base: '/JS-Slash-Runner-Doc/',

  head: [['link', { rel: 'icon', href: 'logo.ico' }]],

  themeConfig: {
    outline: {
      label: '目录',
      level: [2, 3],
    },

    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/关于酒馆助手/介绍.md' },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/N0VI028/JS-Slash-Runner' }],
    logo: '/logo.ico',
    footer: {
      message: '作者：KAKAA, 青空莉想做舞台少女的狗',
      copyright:
        '© Copyright 2025, N0VI028.<br>Licensed under <a href="https://github.com/N0VI028/JS-Slash-Runner/blob/main/LICENSE">Aladdin</a>, Icons by <a href="https://igoutu.cn/">Icons8</a>',
    },
    lastUpdated: true,
    search: {
      provider: 'local',
    },
  },

  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '注意',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
    lineNumbers: true,
    toc: {
      level: [2, 3],
    },
    config(md) {
      md.use(InlineLinkPreviewElementTransform);
    },
  },

  vite: {
    optimizeDeps: {
      exclude: ['@nolebase/vitepress-plugin-inline-link-preview/client', '@nolebase/ui'],
    },
    ssr: {
      noExternal: ['@nolebase/vitepress-plugin-inline-link-preview', '@nolebase/ui'],
    },
  },
};

const vitePressSidebarOptions: VitePressSidebarOptions[] = [
  {
    documentRootPath: 'src',
    scanStartPath: 'guide',
    basePath: '/guide/',
    resolvePath: '/guide/',
    collapsed: true,
    collapseDepth: 2,
    sortMenusByFrontmatterOrder: true,
    manualSortFileNameByPriority: [
      '关于酒馆助手',
      '基本用法',
      '功能详情',

      // TODO: 神秘 vitepress 带子网页的必定被排在在前面, 我服了
      '变量',
      '世界书',
      '楼层消息',
      '角色卡',
      '预设',
      '播放音频',

      // TODO: 因为神秘 vitepress 只能在 .md 里用 order 排序?
      '请求生成',
      '监听和发送事件',
      '导入酒馆数据',
      '注入提示词',
      '触发快速回复命令',
      '脚本额外功能',
      '酒馆正则',
      '酒馆助手宏',
      '安装酒馆扩展',
      '查询版本',
      '分享接口',
      '其他工具函数',
      '访问其他插件',
      '内置第三方库',
    ],
  },
];

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
