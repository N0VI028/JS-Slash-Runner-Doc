import{_ as d,C as n,c as u,o as h,ao as o,j as i,a,G as t,w as r}from"./chunks/framework.DuPVQoDA.js";const T=JSON.parse('{"title":"常见问题解答","description":"","frontmatter":{"order":2},"headers":[],"relativePath":"关于前端助手/常见问题解答.md","filePath":"关于前端助手/常见问题解答.md","lastUpdated":1740241133000}'),p={name:"关于前端助手/常见问题解答.md"},b={id:"安装成功但显示出现问题",tabindex:"-1"};function g(m,l,k,f,q,P){const e=n("VPNolebaseInlineLinkPreview"),s=n("Badge");return h(),u("div",null,[l[41]||(l[41]=o('<h1 id="常见问题解答" tabindex="-1">常见问题解答 <a class="header-anchor" href="#常见问题解答" aria-label="Permalink to &quot;常见问题解答&quot;">​</a></h1><h2 id="安装与更新问题" tabindex="-1">安装与更新问题 <a class="header-anchor" href="#安装与更新问题" aria-label="Permalink to &quot;安装与更新问题&quot;">​</a></h2><h3 id="安装后无任何响应" tabindex="-1">安装后无任何响应 <a class="header-anchor" href="#安装后无任何响应" aria-label="Permalink to &quot;安装后无任何响应&quot;">​</a></h3><p><strong>问题</strong>: 安装扩展之后没有反应？<br><strong>解决</strong>: 检查网络连接。如果使用需要代理的链接，请确保酒馆通过 VPN 连接网络。</p><h3 id="安装-更新成功但扩展不显示" tabindex="-1">安装/更新成功但扩展不显示 <a class="header-anchor" href="#安装-更新成功但扩展不显示" aria-label="Permalink to &quot;安装/更新成功但扩展不显示&quot;">​</a></h3><p><strong>问题</strong>:</p><ul><li>安装/更新提示成功但扩展未显示</li><li>管理面板中无法勾选，呈灰色</li></ul><p><strong>解决</strong>: 升级酒馆版本。扩展仅支持1.12.6及以上版本。</p><h3 id="安装时弹出红色错误弹窗" tabindex="-1">安装时弹出红色错误弹窗 <a class="header-anchor" href="#安装时弹出红色错误弹窗" aria-label="Permalink to &quot;安装时弹出红色错误弹窗&quot;">​</a></h3>',9)),i("p",null,[l[1]||(l[1]=i("strong",null,"问题",-1)),l[2]||(l[2]=a(": 红色错误弹窗提示 ")),l[3]||(l[3]=i("code",null,"<Assets module> Cannot get assets list: Problem with assets URL",-1)),l[4]||(l[4]=i("br",null,null,-1)),l[5]||(l[5]=i("strong",null,"解决",-1)),l[6]||(l[6]=a(": 安装链接的填写位置错误，应该填写在")),t(e,{href:"./安装与更新.html#安装方法"},{default:r(()=>l[0]||(l[0]=[a("安装扩展")])),_:1}),l[7]||(l[7]=a("按钮中的输入框，而不是“下载扩展和资源菜单”中的输入框。"))]),l[42]||(l[42]=i("h3",{id:"安装时弹出黄色警告弹窗",tabindex:"-1"},[a("安装时弹出黄色警告弹窗 "),i("a",{class:"header-anchor",href:"#安装时弹出黄色警告弹窗","aria-label":'Permalink to "安装时弹出黄色警告弹窗"'},"​")],-1)),l[43]||(l[43]=i("h4",{id:"提示文件夹已存在",tabindex:"-1"},[a("提示文件夹已存在 "),i("a",{class:"header-anchor",href:"#提示文件夹已存在","aria-label":'Permalink to "提示文件夹已存在"'},"​")],-1)),l[44]||(l[44]=i("p",null,[i("strong",null,"问题"),a(": 黄色警告弹窗提示 "),i("code",null,"Extension installation failed： Directory already exists..."),i("br"),i("strong",null,"解决"),a(":")],-1)),i("ol",null,[l[11]||(l[11]=i("li",null,[a("进入酒馆安装目录 "),i("code",null,"SillyTavern/data/default-user/extensions")],-1)),l[12]||(l[12]=i("li",null,[a("删除 "),i("code",null,"JS-Slash-Runner"),a(" 文件夹")],-1)),i("li",null,[l[9]||(l[9]=a("检查网络连接（建议使用不需要国外网络环境的")),t(e,{href:"./安装与更新.html#安装方法"},{default:r(()=>l[8]||(l[8]=[a("gitlab安装链接")])),_:1}),l[10]||(l[10]=a("），重新安装扩展"))])]),l[45]||(l[45]=o('<hr><p>附：安卓访问酒馆目录的方法</p><ul><li><p><strong>方法一: 通过文件管理器</strong></p><ol><li>启动 Termux</li><li>使用系统文件管理器进入受限制目录 Android/data</li><li>在新的文件管理界面通过侧边栏访问 Termux</li></ol></li><li><p><strong>方法二: 使用 MT 管理器</strong></p><ol><li>启动 Termux</li><li>在 MT 管理器添加本地存储</li><li>通过 MT 管理器侧边栏访问 Termux</li></ol></li><li><p><strong>方法三: 使用 zerotermux</strong><br> ZeroTermux 是根据 Termux 二次开发的一个非盈利性的软件，安装其内部插件后可直接访问 Termux 文件目录。</p></li><li><p>怎么都找不到文件夹但还是提示存在？<strong>终极方案</strong>:</p><ol><li>打开termux，如果装了一键脚本输入0退出</li><li>输入下面的内容，回车</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol><li>输入下面的内容，回车，然后等待搜索完成</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;JS-Slash-Runner&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果文件夹存在，上面会得到一个路径，复制下来，执行第四步</p><p>4.使用<code>rm -rf </code>为开头（rf后面有一个空格），后接第三步搜索到的路径，输入命令后回车，以下是示例，路径需要你自行替换</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root/SillyTavern1.12.6/SillyTavern/data/default-user/extensions/JS-Slash-Runner</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>此方法删除后不会有任何提示，请谨慎使用。下面是直接一键删除的命令，但可控性较差： <code>find ~ -type d -name &quot;JS-Slash-Runner&quot; | rm -rf</code></p></div></li></ul><h4 id="git-相关错误" tabindex="-1">Git 相关错误 <a class="header-anchor" href="#git-相关错误" aria-label="Permalink to &quot;Git 相关错误&quot;">​</a></h4><p><strong>问题</strong>: 黄色警告弹窗提示 <code>Extension installation failed: Server Error:Error: spawn git ENOENT...</code><br><strong>解决</strong>:</p><ul><li>安装或重装 git</li><li>已安装 git 则尝试添加 git 到环境变量</li></ul><h4 id="链接输入错误" tabindex="-1">链接输入错误 <a class="header-anchor" href="#链接输入错误" aria-label="Permalink to &quot;链接输入错误&quot;">​</a></h4><p><strong>问题</strong>:</p><ul><li>黄色警告弹窗提示 <code>Extension installation failed: Server Error: Cloning into &#39;data/default-user/extensions/JS-Slash- Runner&#39;... warning:url contains a newline in its pathcomponent</code></li><li>黄色警告弹窗提示 <code>Extension installation failed: Server Error: Cloning into &#39;data/default-user/extensions/JS-Slash-Runner&#39;... remote:Repository not found. fatal:Authentication failed for&#39;https://github.com/NOVI028/JS-Slash-Runner.git/&#39;</code></li></ul><p><strong>解决</strong>: 都因填写的安装链接错误，检查是否出现如下情况，更正后重新安装</p><ul><li>复制时在<code>Runner</code>前多了一个换行符，如<code>JS-Slash- Runner</code></li><li>使用屏幕识别导致链接中的大写字母<code>O</code>与数字<code>0</code>混淆，如<code>https://github.com/NOVI028/JS-Slash-Runner.git</code></li></ul><h3 id="手动安装方法" tabindex="-1">手动安装方法 <a class="header-anchor" href="#手动安装方法" aria-label="Permalink to &quot;手动安装方法&quot;">​</a></h3><p><strong>问题</strong>: 常规安装方法都失败？<br><strong>解决</strong>:</p>',13)),i("ol",null,[l[15]||(l[15]=i("li",null,"确保为国外网络环境",-1)),i("li",null,[l[14]||(l[14]=a("访问 ")),t(e,{href:"https://github.com/N0VI028/JS-Slash-Runner",target:"_blank",rel:"noreferrer"},{default:r(()=>l[13]||(l[13]=[a("N0VI028/JS-Slash-Runner")])),_:1})]),l[16]||(l[16]=i("li",null,[a("点击页面右上角绿色按钮 "),i("code",null,"Code"),a(" ，选择 "),i("code",null,"Download ZIP"),a(" 下载压缩包")],-1)),l[17]||(l[17]=i("li",null,[a("解压并重命名为 "),i("code",null,"JS-Slash-Runner")],-1)),l[18]||(l[18]=i("li",null,[a("移动到 "),i("code",null,"SillyTavern/data/default-user/extensions"),a(" 目录 (酒馆多用户使用者请将 default-user 替换为实际用户名)")],-1))]),l[46]||(l[46]=o('<div class="warning custom-block"><p class="custom-block-title">注意</p><p>使用此方法安装的扩展无法自动检查更新</p></div><h3 id="更新加载问题" tabindex="-1">更新加载问题 <a class="header-anchor" href="#更新加载问题" aria-label="Permalink to &quot;更新加载问题&quot;">​</a></h3><p><strong>问题</strong>: 扩展管理面板一直显示 <code>Loading third-party extensions...</code><br><strong>解决</strong>: 连接或更换 VPN 后重试</p><h3 id="提示未连接到api" tabindex="-1">提示未连接到API <a class="header-anchor" href="#提示未连接到api" aria-label="Permalink to &quot;提示未连接到API&quot;">​</a></h3><p><strong>问题</strong>: 扩展或扩展管理界面显示 <code>Not connected to the API!</code> 或 <code>Could not connect to API</code> 的红色错误提示文字<br><strong>解决</strong>: 此提示与前端助手无关，本扩展无需连接API</p><h2 id="编写常见问题" tabindex="-1">编写常见问题 <a class="header-anchor" href="#编写常见问题" aria-label="Permalink to &quot;编写常见问题&quot;">​</a></h2><h3 id="代码渲染问题" tabindex="-1">代码渲染问题 <a class="header-anchor" href="#代码渲染问题" aria-label="Permalink to &quot;代码渲染问题&quot;">​</a></h3><p><strong>问题</strong>: 代码未能正确渲染？<br><strong>解决</strong>: 确保同时满足：</p><ol><li>代码使用三个反引号包裹</li><li>代码中包含 <code>&lt;body&gt;&lt;/body&gt;</code> 闭合标签</li></ol><h3 id="qr-触发失效" tabindex="-1">QR 触发失效 <a class="header-anchor" href="#qr-触发失效" aria-label="Permalink to &quot;QR 触发失效&quot;">​</a></h3><p><strong>问题</strong>: QR 触发不起作用？<br><strong>解决</strong>: 检查并删除代码中的 triggerSlash 函数定义，避免覆盖扩展默认定义</p>',11)),i("h2",b,[l[19]||(l[19]=a("安装成功但显示出现问题 ")),t(s,{type:"tip",text:"Last update：2025.01.04"}),l[20]||(l[20]=a()),l[21]||(l[21]=i("a",{class:"header-anchor",href:"#安装成功但显示出现问题","aria-label":'Permalink to "安装成功但显示出现问题 <Badge type="tip" text="Last update：2025.01.04"/>"'},"​",-1))]),l[47]||(l[47]=i("p",null,"即使成功安装了前端助手，仍然无法正常游玩前端卡？",-1)),l[48]||(l[48]=i("p",null,"以下内容基于络络的总结，做了部分修改，感谢分享！",-1)),i("p",null,[t(e,{href:"https://discord.com/channels/1134557553011998840/1324937235623051385",target:"_blank",rel:"noreferrer"},{default:r(()=>l[22]||(l[22]=[i("img",{src:"https://img.shields.io/badge/Discord-%E7%BB%9C%E7%BB%9C-gray?style=for-the-badge&logo=discord&logoColor=white&labelColor=5865F2",alt:""},null,-1)])),_:1})]),l[49]||(l[49]=o('<h3 id="自查建议" tabindex="-1">自查建议 <a class="header-anchor" href="#自查建议" aria-label="Permalink to &quot;自查建议&quot;">​</a></h3><p>如扩展安装成功但界面显示失败，请参考以下内容进行自查：</p><h4 id="_0-api与模型自查" tabindex="-1">0.API与模型自查 <a class="header-anchor" href="#_0-api与模型自查" aria-label="Permalink to &quot;0.API与模型自查&quot;">​</a></h4><p>小心部分淘宝商/其他中小渠道商可能会在所谓的Claude API或其他API中灌水，在后台更换为性能更低的模型，导致难以执行前端卡复杂的指令。如果你是这些渠道请检查自己的模型，并去询问服务商。</p><h4 id="_1-前端助手配置" tabindex="-1">1. 前端助手配置 <a class="header-anchor" href="#_1-前端助手配置" aria-label="Permalink to &quot;1. 前端助手配置&quot;">​</a></h4><ul><li>确保安装最新版本前端助手</li><li>可以删除并再次使用安装扩展进行安装，设置不会丢失</li></ul><p><strong>提示</strong>：新版前端助手已支持自动检测设置，建议开启前端助手的&quot;自动关闭不兼容选项&quot;和&quot;自动开启局部正则&quot;功能。如果没有这些选项，请及时更新前端助手。</p><h4 id="_2-基础设置调整" tabindex="-1">2. 基础设置调整 <a class="header-anchor" href="#_2-基础设置调整" aria-label="Permalink to &quot;2. 基础设置调整&quot;">​</a></h4><h5 id="必要开启项" tabindex="-1">必要开启项 <a class="header-anchor" href="#必要开启项" aria-label="Permalink to &quot;必要开启项&quot;">​</a></h5><ul><li>开启【局部正则表达式】</li><li>开启【角色卡详情中的<strong>扩展媒体</strong>功能】</li><li>开启【<strong>前端助手</strong>】</li></ul><h5 id="必要关闭项" tabindex="-1">必要关闭项 <a class="header-anchor" href="#必要关闭项" aria-label="Permalink to &quot;必要关闭项&quot;">​</a></h5><ul><li>关闭【禁用外部媒体】</li><li>关闭【自动修复markdown】</li><li>关闭【<strong>油猴脚本HTML注入器</strong>/Gemini轮询扩展的<strong>HTML注入器</strong>】</li><li>关闭【酒馆聊天<strong>自动翻译插件</strong>和浏览器的<strong>自动翻译</strong>】</li></ul><blockquote><p>开启HTML代码注入器可能导致前端界面闪烁，消失，重复等多种错误。</p></blockquote><h4 id="_3-预设相关调整" tabindex="-1">3. 预设相关调整 <a class="header-anchor" href="#_3-预设相关调整" aria-label="Permalink to &quot;3. 预设相关调整&quot;">​</a></h4><ul><li>关闭预设中的<strong>COT（思维链）</strong></li><li>关闭预设中要求生成<strong>状态栏</strong>的条目</li><li>关闭或修改预设中对正文要求了<strong>特殊格式</strong>的条目</li></ul><blockquote><p>这些具有提供格式的功能大概率会与前端卡产生冲突，建议全部关闭，在能正常渲染界面后，再逐个开启测试稳定性。</p></blockquote><p>如仍然遇到格式问题，建议询问预设作者。参考提问模板： &quot;楼主大大我特别用喜欢你的预设，但是我在游玩前端卡时出现了一些问题，想问问玩前端卡应该怎样选择预设条目？&quot;</p><h4 id="_4-正则相关调整" tabindex="-1">4. 正则相关调整 <a class="header-anchor" href="#_4-正则相关调整" aria-label="Permalink to &quot;4. 正则相关调整&quot;">​</a></h4><ul><li>全局正则中可能出现无法预料的，误对前端卡格式进行了替换的情况，出现问题时建议关闭所有全局正则，再逐个开启找出问题所在</li><li>局部正则如有复数个，其执行顺序为从上到下，若对其顺序进行了更改，可能导致界面不能正常渲染</li></ul><h4 id="_5-世界书确认" tabindex="-1">5. 世界书确认 <a class="header-anchor" href="#_5-世界书确认" aria-label="Permalink to &quot;5. 世界书确认&quot;">​</a></h4><ul><li>确保角色卡中的世界书正确导入</li><li>点击角色卡详情页中的小地球图标，使其处于点亮状态</li><li>不要将其他角色的专有世界书设置到【<strong>全局世界书</strong>】</li><li>关闭全局世界书中要求生成<strong>状态栏</strong>的条目，可能对前端卡的格式产生干扰</li></ul><h4 id="_6-版本检查" tabindex="-1">6. 版本检查 <a class="header-anchor" href="#_6-版本检查" aria-label="Permalink to &quot;6. 版本检查&quot;">​</a></h4><ul><li>推荐使用最新版本的酒馆</li></ul><blockquote><p>一些网站可能会推出云酒馆功能只需要登陆网页就能使用，但是<strong>这些网站大多不是最新版酒馆</strong></p></blockquote><h4 id="_7-浏览器兼容性" tabindex="-1">7. 浏览器兼容性 <a class="header-anchor" href="#_7-浏览器兼容性" aria-label="Permalink to &quot;7. 浏览器兼容性&quot;">​</a></h4><ul><li>可尝试更换浏览器</li><li>移动端推荐使用Edge浏览器</li><li>PC端推荐chrome、edge等浏览器</li></ul><h4 id="_8-终极解决方案" tabindex="-1">8. 终极解决方案 <a class="header-anchor" href="#_8-终极解决方案" aria-label="Permalink to &quot;8. 终极解决方案&quot;">​</a></h4><ul><li>如果以上方法都无效，可以尝试重新部署酒馆并重复以上步骤</li></ul><blockquote><p>注：重新部署较为繁琐，建议先在社区寻求帮助，无果后再考虑此方案</p></blockquote><h3 id="游玩建议" tabindex="-1">游玩建议 <a class="header-anchor" href="#游玩建议" aria-label="Permalink to &quot;游玩建议&quot;">​</a></h3><h4 id="模型推荐" tabindex="-1">模型推荐 <a class="header-anchor" href="#模型推荐" aria-label="Permalink to &quot;模型推荐&quot;">​</a></h4><p>建议使用格式稳定的模型，经个人测试 Claude 3.5s、Gemini 2.0 Flash、GPT-4OL 表现优异，但请务必使用模型对应的预设，并关闭预设中的格式相关设置。</p><h4 id="减少卡顿-改善加载过久" tabindex="-1">减少卡顿/改善加载过久 <a class="header-anchor" href="#减少卡顿-改善加载过久" aria-label="Permalink to &quot;减少卡顿/改善加载过久&quot;">​</a></h4><p>建议在设置中限制加载消息条数（如设置为5条），同时将前端助手深度调高或设为0，以避免过多消息或大量的未渲染代码块导致系统卡顿。</p><h4 id="节省上下文" tabindex="-1">节省上下文 <a class="header-anchor" href="#节省上下文" aria-label="Permalink to &quot;节省上下文&quot;">​</a></h4><p>使用隐藏正文提取摘要的正则功能时，请将深度设置至少为一楼，这样模型可以参考前文格式，保证输出更加稳定。</p><h3 id="正确提问方法" tabindex="-1">正确提问方法 <a class="header-anchor" href="#正确提问方法" aria-label="Permalink to &quot;正确提问方法&quot;">​</a></h3><p>在提问前请务必先进行自查。创作者们都是在为爱发电，写卡的初衷是满足创作欲而非提供客服服务 😭。因此，<strong>提问时请注意礼貌，同时可以适当表达对作者作品的喜爱</strong>——这是支持创作者继续创作的唯一动力！</p><p><strong>提问时候一定要包含以下内容：</strong></p><ul><li>直接的完整截图</li><li>点开信息右上角钢笔图标编辑按钮的截图</li><li>文字描述问题的前因后果：如何触发、具体表现、导致后果和已经尝试过的方法</li></ul><p>同时你也可以写出我已经根据此指南进行自查，但问题仍然存在，来避免被问及指南内包含的事项。（前提是你真的自查完整了！）</p><h3 id="前端卡游玩常见问答" tabindex="-1">前端卡游玩常见问答 <a class="header-anchor" href="#前端卡游玩常见问答" aria-label="Permalink to &quot;前端卡游玩常见问答&quot;">​</a></h3><h4 id="_1-首楼就没有界面是怎么回事" tabindex="-1">1. 首楼就没有界面是怎么回事？ <a class="header-anchor" href="#_1-首楼就没有界面是怎么回事" aria-label="Permalink to &quot;1. 首楼就没有界面是怎么回事？&quot;">​</a></h4>',43)),i("p",null,[l[27]||(l[27]=a("自查")),t(e,{href:"#_1-前端助手配置"},{default:r(()=>l[23]||(l[23]=[a("前端助手配置")])),_:1}),l[28]||(l[28]=a("，")),t(e,{href:"#_2-基础设置调整"},{default:r(()=>l[24]||(l[24]=[a("基础设置调整")])),_:1}),l[29]||(l[29]=a("，")),t(e,{href:"#_4-正则相关调整"},{default:r(()=>l[25]||(l[25]=[a("正则相关调整")])),_:1}),l[30]||(l[30]=a("，")),t(e,{href:"#_7-浏览器兼容性"},{default:r(()=>l[26]||(l[26]=[a("浏览器兼容性")])),_:1}),l[31]||(l[31]=a("这几个部分。"))]),l[50]||(l[50]=i("h4",{id:"_2-首楼正常-但回复就只有文字-代码块了",tabindex:"-1"},[a("2. 首楼正常，但回复就只有文字/代码块了？ "),i("a",{class:"header-anchor",href:"#_2-首楼正常-但回复就只有文字-代码块了","aria-label":'Permalink to "2. 首楼正常，但回复就只有文字/代码块了？"'},"​")],-1)),i("p",null,[l[36]||(l[36]=a("自查")),t(e,{href:"#_0-api与模型自查"},{default:r(()=>l[32]||(l[32]=[a("API与模型自查")])),_:1}),l[37]||(l[37]=a("，")),t(e,{href:"#_3-预设相关调整"},{default:r(()=>l[33]||(l[33]=[a("预设相关调整")])),_:1}),l[38]||(l[38]=a("，")),t(e,{href:"#_4-正则相关调整"},{default:r(()=>l[34]||(l[34]=[a("正则相关调整")])),_:1}),l[39]||(l[39]=a("，")),t(e,{href:"#_5-世界书确认"},{default:r(()=>l[35]||(l[35]=[a("世界书确认")])),_:1}),l[40]||(l[40]=a("这几个部分。"))]),l[51]||(l[51]=o('<p>在确保<strong>完成所有自查步骤</strong>后，问题很可能是由以下原因造成——预设中仍有未关闭的格式设置造成干扰、模型与预设不匹配、或使用的渠道质量存在问题。如果无法确定预设中的格式内容，建议在预设发布帖中友善提问 🥺</p><h4 id="_3-太卡了-加载好久啊" tabindex="-1">3. 太卡了/加载好久啊 <a class="header-anchor" href="#_3-太卡了-加载好久啊" aria-label="Permalink to &quot;3. 太卡了/加载好久啊&quot;">​</a></h4><p>可以试试看打开浏览器的硬件加速，另外确保你的设备性能足够浏览大多数网页，更改设置中的加载信息条数（推荐做法是只加载5条并且让前端助手的深度为0，需要看更早的时候点击 more message 即可）。</p><h4 id="_4-为啥我刚才明明正常显示画面了-聊了几楼回去看又不正常了" tabindex="-1">4.为啥我刚才明明正常显示画面了，聊了几楼回去看又不正常了？ <a class="header-anchor" href="#_4-为啥我刚才明明正常显示画面了-聊了几楼回去看又不正常了" aria-label="Permalink to &quot;4.为啥我刚才明明正常显示画面了，聊了几楼回去看又不正常了？&quot;">​</a></h4><p>点击编辑后再点击确认按钮达到刷新的效果，一般可以解决此类问题。</p><p>如果仍旧无法解决，可能是作者设定了正则的处理深度，将更早的聊天记录取消渲染或整理简化（目的一般为防止卡顿），可自行修改正则的处理深度，也可查看发布帖关于此的描述或询问作者。</p><h4 id="_5-为啥出现了两次一样的窗口" tabindex="-1">5. 为啥出现了两次一样的窗口 <a class="header-anchor" href="#_5-为啥出现了两次一样的窗口" aria-label="Permalink to &quot;5. 为啥出现了两次一样的窗口&quot;">​</a></h4><p>Gemini轮询插件的HTML注入器会再渲染一次代码内容，导致出现两个窗口。</p><h4 id="_6-界面闪烁了一下之后就消失了-和界面交互后界面消失了" tabindex="-1">6. 界面闪烁了一下之后就消失了/和界面交互后界面消失了 <a class="header-anchor" href="#_6-界面闪烁了一下之后就消失了-和界面交互后界面消失了" aria-label="Permalink to &quot;6. 界面闪烁了一下之后就消失了/和界面交互后界面消失了&quot;">​</a></h4><p>检查是否开启了油猴脚本HTML注入器或Gemini轮询插件的HTML注入器，如果开启了请关闭。</p>',10))])}const S=d(p,[["render",g]]);export{T as __pageData,S as default};
