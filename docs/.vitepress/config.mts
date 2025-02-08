import { defineConfig, DefaultTheme } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions = {
  title: "前端助手",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/logo.png',
    outline: {
      label: "目录",
      level: [2, 5],
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/关于前端助手/安装.md' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/N0VI028/JS-Slash-Runner' },
      { icon: 'discord', link: 'https://discord.com/channels/1134557553011998840/1296494001406345318' }
    ],
    footer: {
      message: '作者： KAKAA, 青空莉想做舞台少女的狗',
      copyright: 'Copyright © 2025, N0VI028.'
    },
    lastUpdated: true,
    search: {
      provider: 'local'
    }
  },
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '注意',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  }
};

const vitePressSidebarOptions = {
  documentRootPath: '/docs',
  collapsed: false,
  sortMenusByFrontmatterOrder: true,
  manualSortFileNameByPriority: [
    "关于前端助手",
    "基本用法",
    "功能详情",
  ]
};

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));