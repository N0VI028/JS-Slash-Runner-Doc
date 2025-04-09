import{_ as n,C as t,c as p,o as l,j as e,ao as d,a,G as r,w as o}from"./chunks/framework.RuhsIXye.js";const F=JSON.parse('{"title":"参与贡献","description":"","frontmatter":{"order":4},"headers":[],"relativePath":"3.0.0/关于酒馆助手/参与贡献.md","filePath":"3.0.0/关于酒馆助手/参与贡献.md","lastUpdated":1744184508000}'),h={name:"3.0.0/关于酒馆助手/参与贡献.md"};function c(k,s,b,u,g,m){const i=t("VPNolebaseInlineLinkPreview");return l(),p("div",null,[s[3]||(s[3]=e("h1",{id:"参与贡献",tabindex:"-1"},[a("参与贡献 "),e("a",{class:"header-anchor",href:"#参与贡献","aria-label":'Permalink to "参与贡献"'},"​")],-1)),s[4]||(s[4]=e("h2",{id:"手动编译",tabindex:"-1"},[a("手动编译 "),e("a",{class:"header-anchor",href:"#手动编译","aria-label":'Permalink to "手动编译"'},"​")],-1)),e("p",null,[s[1]||(s[1]=a("你可以参考 ")),r(i,{href:"https://sillytavern-stage-girls-dog.readthedocs.io/tool_and_experience/js_slash_runner/index.html",target:"_blank",rel:"noreferrer"},{default:o(()=>s[0]||(s[0]=[a("参与前端插件开发的 VSCode 环境配置")])),_:1}),s[2]||(s[2]=a(" 来得到 VSCode 上更详细的配置和使用教程."))]),s[5]||(s[5]=d('<p>你需要先安装有 node 22+ 和 pnpm. 如果已经安装有 node 22+, 则 pnpm 可以按以下步骤安装:</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后, 用 pnpm 安装本项目的所有依赖:</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>之后你就可以对本项目进行编译:</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>或者, 你可以用 <code>pnpm watch</code> 来持续监听代码变动. 这样只需刷新酒馆网页, 酒馆就会使用最新的插件代码.</p><h2 id="参与贡献提示" tabindex="-1">参与贡献提示 <a class="header-anchor" href="#参与贡献提示" aria-label="Permalink to &quot;参与贡献提示&quot;">​</a></h2><p>基于酒馆 UI 插件的项目结构要求, 本项目直接打包源代码在 <code>dist/</code> 文件夹中并随仓库上传, 而这会让开发时经常出现分支冲突.</p><p>为了解决这一点, 仓库在 <code>.gitattribute</code> 中设置了对于 <code>dist/</code> 文件夹中的冲突总是使用当前版本. 这不会有什么问题: 在上传后, ci 会将 <code>dist/</code> 文件夹重新打包成最新版本, 因而你上传的 <code>dist/</code> 文件夹内容如何无关紧要.</p><p>为了启用这个功能, 请执行一次以下命令:</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge.ours.driver</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',12))])}const C=n(h,[["render",c]]);export{F as __pageData,C as default};
