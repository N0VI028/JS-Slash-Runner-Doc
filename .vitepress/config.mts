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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/N0VI028/JS-Slash-Runner' },
    ],
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
      '世界书',
      '世界书条目',
      '变量操作',
      '楼层消息',
      '预设操作',
      // TODO: 调整顺序
      '其他辅助功能',
      '应用示例',
    ],
  },
];

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
