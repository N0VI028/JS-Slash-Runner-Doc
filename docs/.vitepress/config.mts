import { defineConfig, HeadConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";
import { InlineLinkPreviewElementTransform } from "@nolebase/vitepress-plugin-inline-link-preview/markdown-it";

const vitePressOptions = {
  vite: {
    optimizeDeps: {
      exclude: [
        "@nolebase/vitepress-plugin-inline-link-preview/client",
        "@nolebase/ui",
      ],
    },
    ssr: {
      noExternal: [
        "@nolebase/vitepress-plugin-inline-link-preview",
        "@nolebase/ui",
      ],
    },
  },
  base: "/JS-Slash-Runner-Doc/",
  title: "前端助手",
  description: "在SillyTavern中渲染前端界面",
  head: [["link", { rel: "icon", href: "logo.ico" }]] as HeadConfig[],
  themeConfig: {
    logo: "/logo.ico",
    outline: {
      label: "目录",
      level: [2, 3],
    },
    nav: [
      { text: "主页", link: "/" },
      { text: "指南", link: "/关于前端助手/介绍.md" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/N0VI028/JS-Slash-Runner" },
      {
        icon: "discord",
        link: "https://discord.com/channels/1134557553011998840/1296494001406345318",
      },
    ],
    footer: {
      message: "作者：KAKAA, 青空莉想做舞台少女的狗",
      copyright:
        '© Copyright 2025, N0VI028.<br>Licensed under <a href="https://github.com/N0VI028/JS-Slash-Runner/blob/main/LICENSE">Aladdin</a>, Icons by <a href="https://igoutu.cn/">Icons8</a>',
    },
    lastUpdated: true,
    search: {
      provider: "local",
    },
  },
  markdown: {
    container: {
      tipLabel: "提示",
      warningLabel: "注意",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
    lineNumbers: true,
    toc: {
      level: [2, 3],
    },
    config(md) {
      md.use(InlineLinkPreviewElementTransform);
    },
  },
};

const vitePressSidebarOptions = {
  documentRootPath: "/docs",
  collapsed: true,
  collapseDepth: 2,
  sortMenusByFrontmatterOrder: true,
  manualSortFileNameByPriority: ["关于前端助手", "基本用法", "功能详情"],
};

export default defineConfig(
  withSidebar(vitePressOptions, vitePressSidebarOptions)
);
