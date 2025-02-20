import{_ as e,C as t,c as n,o as l,j as a,G as r,an as h,a as p}from"./chunks/framework.bLg64c39.js";const y=JSON.parse('{"title":"其他辅助功能","description":"","frontmatter":{"order":1},"headers":[],"relativePath":"功能详情/其他辅助功能.md","filePath":"功能详情/其他辅助功能.md","lastUpdated":1739965330000}'),d={name:"功能详情/其他辅助功能.md"};function o(k,s,c,g,u,m){const i=t("CustomTOC");return l(),n("div",null,[s[0]||(s[0]=a("h1",{id:"其他辅助功能",tabindex:"-1"},[p("其他辅助功能 "),a("a",{class:"header-anchor",href:"#其他辅助功能","aria-label":'Permalink to "其他辅助功能"'},"​")],-1)),r(i),s[1]||(s[1]=h('<h2 id="getiframename" tabindex="-1">getIframeName <a class="header-anchor" href="#getiframename" aria-label="Permalink to &quot;getIframeName&quot;">​</a></h2><p>获取 iframe 的名称。</p><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getIframeName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><ul><li><strong>iframe 名称</strong>: <code>string</code><ul><li>对于楼层消息是 <code>message-楼层id-是该楼层第几个iframe</code></li><li>对于全局脚本是 <code>script-脚本名称</code></li></ul></li></ul><h2 id="getmessageid" tabindex="-1">getMessageId <a class="header-anchor" href="#getmessageid" aria-label="Permalink to &quot;getMessageId&quot;">​</a></h2><p>从消息楼层 iframe 的 <code>iframe_name</code> 获取它所在楼层的楼层 id。</p><p><strong>只能对楼层消息 iframe</strong> 使用</p><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getMessageId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">iframe_name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><h4 id="iframe-name" tabindex="-1"><code>iframe_name</code> <a class="header-anchor" href="#iframe-name" aria-label="Permalink to &quot;`iframe_name`&quot;">​</a></h4><ul><li><strong>类型</strong>: <code>string</code></li><li><strong>描述</strong>: 消息楼层 iframe 的名称</li></ul><h3 id="返回值-1" tabindex="-1">返回值 <a class="header-anchor" href="#返回值-1" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><ul><li><strong>楼层 id</strong>: <code>number</code></li></ul><h2 id="getcurrentmessageid" tabindex="-1">getCurrentMessageId <a class="header-anchor" href="#getcurrentmessageid" aria-label="Permalink to &quot;getCurrentMessageId&quot;">​</a></h2><p>获取本消息楼层 iframe 所在楼层的楼层 id。</p><p><strong>只能对楼层消息 iframe</strong> 使用</p><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getCurrentMessageId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="返回值-2" tabindex="-1">返回值 <a class="header-anchor" href="#返回值-2" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><ul><li><strong>楼层 id</strong>: <code>number</code></li></ul><h2 id="substitudemacros" tabindex="-1">substitudeMacros <a class="header-anchor" href="#substitudemacros" aria-label="Permalink to &quot;substitudeMacros&quot;">​</a></h2><p>替换字符串中的 SillyTavern 宏。</p><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> substitudeMacros</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="参数-1" tabindex="-1">参数 <a class="header-anchor" href="#参数-1" aria-label="Permalink to &quot;参数&quot;">​</a></h3><h4 id="text" tabindex="-1"><code>text</code> <a class="header-anchor" href="#text" aria-label="Permalink to &quot;`text`&quot;">​</a></h4><ul><li><strong>类型</strong>: <code>string</code></li><li><strong>描述</strong>: 需要替换的字符串</li></ul><h3 id="返回值-3" tabindex="-1">返回值 <a class="header-anchor" href="#返回值-3" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><ul><li><strong>替换结果</strong>: <code>string</code></li></ul><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> substitudeMacros</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{char}} speaks in {{lastMessageId}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;少女歌剧 speaks in 5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="getlastmessageid" tabindex="-1">getLastMessageId <a class="header-anchor" href="#getlastmessageid" aria-label="Permalink to &quot;getLastMessageId&quot;">​</a></h2><p>获取最新楼层 id。</p><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getLastMessageId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="返回值-4" tabindex="-1">返回值 <a class="header-anchor" href="#返回值-4" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><ul><li><strong>最新楼层 id</strong>: <code>number</code></li></ul>',35))])}const E=e(d,[["render",o]]);export{y as __pageData,E as default};
