# 快速回复触发JavaScript代码

## 原理
- 酒馆助手提供了 [`/event-emit event="事件名称"`](../功能详情/监听和发送事件#quick-reply-命令) 可以发送事件
- 酒馆助手在 JavaScript 部分能监听、发送、等待或取消监听事件

## 实现
- 快速回复部分写上 [`/event-emit event="存档"`](../功能详情/监听和发送事件#quick-reply-命令)
- 酒馆助手部分写上 [`eventOn("存档", save)`](../功能详情/监听和发送事件#eventon)

即可用快速回复按钮进行存档，**不用写快速回复那恶心人的 STScript 代码**