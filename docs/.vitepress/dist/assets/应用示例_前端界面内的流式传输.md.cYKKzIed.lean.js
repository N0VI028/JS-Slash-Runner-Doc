import{_ as a,C as d,c as o,o as p,an as r,j as i,a as s,G as l,w as n}from"./chunks/framework.bLg64c39.js";const v=JSON.parse('{"title":"前端界面内的流式传输","description":"","frontmatter":{},"headers":[],"relativePath":"应用示例/前端界面内的流式传输.md","filePath":"应用示例/前端界面内的流式传输.md","lastUpdated":1740044871000}'),u={name:"应用示例/前端界面内的流式传输.md"};function m(k,e,E,f,g,h){const t=d("VPNolebaseInlineLinkPreview");return p(),o("div",null,[e[30]||(e[30]=r("",5)),i("ul",null,[i("li",null,[e[1]||(e[1]=s("我的框架：")),l(t,{href:"https://discord.com/channels/1134557553011998840/1296494001406345318/1328423793701683323",target:"_blank",rel:"noreferrer"},{default:n(()=>e[0]||(e[0]=[s("Discord帖子")])),_:1})]),i("li",null,[e[3]||(e[3]=s("他人的原创实战例子：")),l(t,{href:"https://discord.com/channels/1134557553011998840/1326003324088090704/1336653204598816848",target:"_blank",rel:"noreferrer"},{default:n(()=>e[2]||(e[2]=[s("Discord帖子")])),_:1})])]),e[31]||(e[31]=i("p",null,"也就是说,",-1)),i("ul",null,[e[12]||(e[12]=i("li",null,"玩家只在顶楼的消息楼层 iframe 内进行游玩，不再生成新的楼层；",-1)),i("li",null,[e[6]||(e[6]=s("对于玩家的输入，我们通过前端助手的 ")),l(t,{href:"./../功能详情/请求生成.html#generate"},{default:n(()=>e[4]||(e[4]=[i("code",null,"generate",-1)])),_:1}),e[7]||(e[7]=s("、")),l(t,{href:"./../功能详情/请求生成.html#generateraw"},{default:n(()=>e[5]||(e[5]=[i("code",null,"generateRaw",-1)])),_:1}),e[8]||(e[8]=s(" 命令自行要求 ai 回复；"))]),i("li",null,[e[10]||(e[10]=s("为了让消息记录下来，我们用 ")),l(t,{href:"./../功能详情/楼层消息.html#setchatmessage"},{default:n(()=>e[9]||(e[9]=[i("code",null,"setChatMessage",-1)])),_:1}),e[11]||(e[11]=s(" 将它保存到消息文件中（或自制存档机制？）。"))])]),e[32]||(e[32]=i("h3",{id:"方法2-不再依靠酒馆显示-用全局脚本-iframe-获取流式传输文本并生成界面-可能更自由",tabindex:"-1"},[s("方法2: 不再依靠酒馆显示，用全局脚本 iframe 获取流式传输文本并生成界面（可能更自由） "),i("a",{class:"header-anchor",href:"#方法2-不再依靠酒馆显示-用全局脚本-iframe-获取流式传输文本并生成界面-可能更自由","aria-label":'Permalink to "方法2: 不再依靠酒馆显示，用全局脚本 iframe 获取流式传输文本并生成界面（可能更自由）"'},"​")],-1)),e[33]||(e[33]=i("p",null,"既然酒馆的流式传输在显示上有问题，我们不再依赖于酒馆的显示，不再是用正则替换一个消息楼层 iframe 出来用于渲染。",-1)),i("p",null,[e[15]||(e[15]=s("作为替代，我们使用 ")),l(t,{href:"./../基本用法/全局脚本.html#全局脚本"},{default:n(()=>e[13]||(e[13]=[s("全局脚本 iframe")])),_:1}),e[16]||(e[16]=s(" 来监听流式传输文本：")),l(t,{href:"https://discord.com/channels/1134557553011998840/1330206359362211960",target:"_blank",rel:"noreferrer"},{default:n(()=>e[14]||(e[14]=[s("Discord帖子")])),_:1})]),e[34]||(e[34]=r("",7)),i("ol",null,[e[27]||(e[27]=i("li",null,[s("全局脚本监听 "),i("code",null,"tavern_events.MESSAGE_RECEIVED -> message_id"),s("，获取新消息楼层中的 ai 输出；")],-1)),e[28]||(e[28]=i("li",null,"全局脚本处理消息中的计算；",-1)),i("li",null,[e[19]||(e[19]=s("全局脚本通过 ")),l(t,{href:"./../功能详情/酒馆正则.html#gettavernregexes"},{default:n(()=>e[17]||(e[17]=[i("code",null,"getTavernRegexes",-1)])),_:1}),e[20]||(e[20]=s(" 或 ")),l(t,{href:"./../功能详情/世界书/获取世界书.html#getLorebookEntries"},{default:n(()=>e[18]||(e[18]=[i("code",null,"getLorebookEntries",-1)])),_:1}),e[21]||(e[21]=s(" 等，来得到存储在正则、世界书条目或其他地方的消息楼层 iframe（要渲染的")),e[22]||(e[22]=i("code",null,"<body>",-1)),e[23]||(e[23]=s("代码块）;"))]),e[29]||(e[29]=i("li",null,"全局脚本将之前的计算结果填入到获取到的消息楼层 iframe 中；",-1)),i("li",null,[e[25]||(e[25]=s("全局脚本用 ")),l(t,{href:"./../功能详情/楼层消息.html#setchatmessage"},{default:n(()=>e[24]||(e[24]=[i("code",null,"setChatMessage",-1)])),_:1}),e[26]||(e[26]=s(" 将消息楼层修改为该消息楼层 iframe。"))])])])}const y=a(u,[["render",m]]);export{v as __pageData,y as default};
