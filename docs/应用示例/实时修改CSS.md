# 实时修改CSS

实时将 Vscode（或Cursor）上的CSS修改同步到 SillyTavern 上，方便进行主题设计。

## 示例

- 安装 VSCode，并为 VSCode 安装 live server 插件，[查看参考教程](https://sillytavern-stage-girls-dog.readthedocs.io/tool_and_experience/_vscode/index.html)
- 用 VSCode 打开一个文件夹，在其中新建一个 test.css 文件
- 在 VSCode 文件列表右键 test.css 文件，点击 "复制相对路径"
- 在 VSCode 右下角点击 "Go Live" 来将文件夹映射到链接上，然后 "Go Live" 将会变成一串数字
- 打开下方下载的角色卡正则中的 "脚本-实时修改CSS"，将其中 "填入你的css链接" 改为 `http://localhost:那一串数字/你复制得到的相对路径`

<MyButton url="https://gitgud.io/SmilingFace/tavern_resource/-/raw/main/前端助手/实时修改css/角色卡.png?inline=false">📥 下载直接可用的模板</MyButton>

::: tip
如果觉得 VSCode 修改后的反馈还是比较慢，可以把 `脚本-实时修改CSS` 中最下面一行的 `1000` 调小
:::

<video width="100%" height="auto" controls style="margin-top: 15px;">
  <source src="https://gitgud.io/SmilingFace/tavern_resource/-/raw/main/%E5%89%8D%E7%AB%AF%E5%8A%A9%E6%89%8B/%E5%AE%9E%E6%97%B6%E4%BF%AE%E6%94%B9css/%E8%A7%86%E9%A2%91.mov?inline=false" type="video/mp4">
  您的浏览器不支持 video 标签
</video>
