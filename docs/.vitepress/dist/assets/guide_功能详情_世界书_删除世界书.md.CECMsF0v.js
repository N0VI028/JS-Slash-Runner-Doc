import{_ as e,C as t,c as n,o as l,j as a,G as o,ao as r,a as h}from"./chunks/framework.RuhsIXye.js";const E=JSON.parse('{"title":"删除世界书","description":"","frontmatter":{},"headers":[],"relativePath":"guide/功能详情/世界书/删除世界书.md","filePath":"guide/功能详情/世界书/删除世界书.md","lastUpdated":1744184508000}'),d={name:"guide/功能详情/世界书/删除世界书.md"};function k(p,s,c,b,u,g){const i=t("CustomTOC");return l(),n("div",null,[s[0]||(s[0]=a("h1",{id:"删除世界书",tabindex:"-1"},[h("删除世界书 "),a("a",{class:"header-anchor",href:"#删除世界书","aria-label":'Permalink to "删除世界书"'},"​")],-1)),o(i),s[1]||(s[1]=r('<h2 id="deletelorebook" tabindex="-1">deleteLorebook <a class="header-anchor" href="#deletelorebook" aria-label="Permalink to &quot;deleteLorebook&quot;">​</a></h2><p>删除世界书。</p><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> deleteLorebook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">lorebook</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><h4 id="lorebook" tabindex="-1"><code>lorebook</code> <a class="header-anchor" href="#lorebook" aria-label="Permalink to &quot;`lorebook`&quot;">​</a></h4><ul><li><strong>类型</strong>: <code>string</code></li><li><strong>描述</strong>: 世界书名称</li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><ul><li><strong>是否成功删除</strong>: <code>boolean</code> - 可能因世界书不存在等原因而失败</li></ul><h2 id="deletelorebookentry" tabindex="-1">deleteLorebookEntry <a class="header-anchor" href="#deletelorebookentry" aria-label="Permalink to &quot;deleteLorebookEntry&quot;">​</a></h2><p>删除世界书中的某个条目。</p><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> deleteLorebookEntry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  lorebook</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  uid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="参数-1" tabindex="-1">参数 <a class="header-anchor" href="#参数-1" aria-label="Permalink to &quot;参数&quot;">​</a></h3><h4 id="lorebook-1" tabindex="-1"><code>lorebook</code> <a class="header-anchor" href="#lorebook-1" aria-label="Permalink to &quot;`lorebook`&quot;">​</a></h4><ul><li><strong>类型</strong>: <code>string</code></li><li><strong>描述</strong>: 世界书名称</li></ul><h4 id="uid" tabindex="-1"><code>uid</code> <a class="header-anchor" href="#uid" aria-label="Permalink to &quot;`uid`&quot;">​</a></h4><ul><li><strong>类型</strong>: <code>number</code></li><li><strong>描述</strong>: 要删除的条目 uid</li></ul><h3 id="返回值-1" tabindex="-1">返回值 <a class="header-anchor" href="#返回值-1" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><ul><li><strong>是否成功删除</strong>: <code>boolean</code> - 可能因世界书不存在、对应条目不存在等原因失败</li></ul>',18))])}const m=e(d,[["render",k]]);export{E as __pageData,m as default};
