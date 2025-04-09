---
layout: home
title: SillyTavern

hero:
  name: 前端助手
  text: JS-Slash-Runner
  tagline: 在SillyTavern中渲染前端界面
  image:
    src: /home.png
    alt: Project Logo
  actions:
    - theme: brand
      text: 使用说明
      link: /guide/关于前端助手/介绍
    - theme: alt
      text: 在GitHub上查看
      link: https://github.com/N0VI028/JS-Slash-Runner

features:
  - title: 🎨 界面渲染
    details: 支持在对话中渲染完整的HTML/CSS/JS界面，提供用户头像自动获取等便捷功能，可自定义加载动画
  - title: 🛠️ 脚本系统
    details: 支持全局脚本和库功能，内置多个实用第三方库(jQuery、Lodash等)
  - title: 🌏 世界书操作
    details: 支持世界书的获取、创建、修改、删除，以及条目和设置的管理
  - title: 📝 变量系统
    details: 提供变量的增删改查操作，可在提示词中直接获取变量值
  - title: 🤖 AI生成控制
    details: 自定义生成配置和提示词，支持流式传输，可覆盖或注入额外提示词
  - title: 🔄 事件系统
    details: 监听酒馆内置事件，支持自定义事件触发和处理，提供事件等待和一次性监听机制
  - title: ⚡ 实用功能
    details: 触发酒馆Slash命令，管理酒馆正则表达式，操作楼层消息和iframe
  - title: 🔌 系统交互
    details: 可与SillyTavern界面交互，支持自定义事件和钩子，可作为中间层连接外部应用
  - title: 🎵 音频系统
    details: 支持背景音乐和音效播放，提供多种播放模式，可通过快捷命令控制

---

<FeatureCarousel />