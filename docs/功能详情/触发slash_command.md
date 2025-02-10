# 触发 Slash Command

我们可以在嵌入的 iframe 中执行 SillyTavern 内部的 Slash 命令 (斜杠命令), 如 `/run`、`/echo` 等。

::: info 参考
你可以在这些地方查看SillyTavern的全部 Slash（快速回复） 命令：
- 在 SillyTavern 消息发送框中输入并发送`/help slash`
- 点击前端助手扩展界面右上角的`编写参考-酒馆命令`
- 查看[SillyTavern 脚本命令自查手册](https://rentry.org/sillytavern-script-book)
:::
## 执行命令
运行 Slash 命令, 注意如果命令写错了将不会有任何反馈。

```typescript
async function triggerSlash(command: string): Promise<void>
```

**参数：**
- `command`: 要运行的 Slash 命令.

::: info 示例

在酒馆界面弹出提示语 `hello!`
```typescript
  await triggerSlash('/echo hello!');
```
:::


## 执行命令并获取管道结果

运行 Slash 命令, 并返回命令管道的结果。

```typescript
async function triggerSlashWithResult(command: string): Promise<string | undefined>
```

**参数：**
- `command`: 要运行的 Slash 命令.

**返回值：**
- Slash 管道结果, 如果命令出错或执行了 `/abort` 则返回 `undefined`.

::: info 示例
获取当前聊天消息最后一条消息对应的 id.
``` typescript
  const last_message_id = await triggerSlashWithResult('/pass {{lastMessageId}}');
```
:::

