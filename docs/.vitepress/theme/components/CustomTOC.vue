<template>
  <nav class="custom-toc">
    <ul class="toc-list">
      <li v-for="(item, i) in headings" :key="i" class="toc-item">
        <!-- 父级 H2 -->
        <div class="toc-item-title h2" @click="toggleCollapse(item)">
          <!-- 跳转 -->
          <div class="title-content">
            <a :href="item.href" @click.stop.prevent="scrollToAnchor(item.href)">
              <span v-if="item.iconType" :class="['icon', item.iconType]"></span>
              {{ item.text }}
            </a>
            <!-- 折叠按钮（若没有 children，就不显示按钮） -->
            <button
              v-if="item.children.length"
              class="toggle-btn"
              :aria-label="item.collapsed ? '展开' : '折叠'"
            />
          </div>
          <!-- 描述文本 -->
          <div v-if="item.description" class="title-description" @click.stop>
            {{ item.description }}
          </div>
        </div>

        <!-- 子级 H3，只有当 collapsed 为 false 时才显示 -->
        <ul v-if="!item.collapsed && item.children.length" class="sub-list">
          <li v-for="(h3Item, j) in item.children" :key="j" class="sub-item h3">
            <a :href="h3Item.href" @click.prevent="scrollToAnchor(h3Item.href)">
              <span v-if="h3Item.iconType" :class="['icon', h3Item.iconType]"></span>
              {{ h3Item.text }}
            </a>
            <!-- H4 列表 -->
            <ul v-if="h3Item.children?.length" class="h4-list">
              <li v-for="(h4Item, k) in h3Item.children" :key="k" class="sub-item h4">
                <a :href="h4Item.href" @click.prevent="scrollToAnchor(h4Item.href)">
                  {{ h4Item.text }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
/**
 * 该组件会通过运行时 DOM 查询收集 H2/H3 标题，
 * 并且构建成树状结构，以支持折叠/展开。
 */
export default {
  name: "MyCustomTOC",
  data() {
    return {
      headings: [],
    };
  },
  mounted() {
    this.collectHeadings();
  },
  methods: {
    /**
     * 第一步：遍历页面中所有 H2/H3 节点，构建树状结构
     */
    collectHeadings() {
      // 修改选择器，限定在 .vp-doc 类中
      const headingTags = Array.from(
        document.querySelector(".vp-doc")?.querySelectorAll("h2, h3, h4") || []
      );
      // 构建层级：H2 为父节点，H3 为其 children
      this.headings = this.buildHeadingTree(headingTags);
    },

    /**
     * 将获取到的 headingTags 按 H2->H3 的层级构建树
     */
    buildHeadingTree(headingTags) {
      const result = [];
      let lastH2 = null;
      let lastH3 = null;

      headingTags.forEach((tag, index) => {
        const level = tag.tagName.toLowerCase();
        const text = tag.innerText.trim();
        
        // 如果是 H3 且标题包含"示例"，则跳过
        if (level === "h3" && text.includes("示例")) {
          return;
        }

        const item = {
          text,
          href: "#" + tag.id,
          children: [],
          collapsed: false,
          iconType: this.getIconType(text, level)
        };

        // 如果是 H2，尝试获取其后的第一段描述文本
        if (level === "h2") {
          // 查找 H2 后的第一个非标题文本节点
          let nextElement = tag.nextElementSibling;
          while (nextElement && (nextElement.tagName === 'H2' || nextElement.tagName === 'H3' || nextElement.tagName === 'H4')) {
            nextElement = nextElement.nextElementSibling;
          }
          
          if (nextElement && !nextElement.querySelector('h2, h3, h4')) {
            // 获取文本内容并分割成行
            const text = nextElement.textContent.trim();
            // 只取第一行（到第一个换行符为止）
            let firstLine = text.split('\n')[0].trim();
            // 去掉句尾的中英文句号
            firstLine = firstLine.replace(/[。.]$/, '');
            item.description = firstLine;
          }

          lastH2 = item;
          lastH3 = null;
          result.push(item);
        } else if (level === "h3") {
          if (lastH2) {
            lastH3 = item;
            lastH2.children.push(item);
          }
        } else if (level === "h4") {
          if (lastH3) {
            if (!lastH3.children) {
              lastH3.children = [];
            }
            lastH3.children.push(item);
          }
        }
      });

      return result;
    },

    /**
     * 根据标题内容和层级判断图标类型
     */
    getIconType(text, level) {
      if (level === "h2") {
        return 'section';
      }
      
      if (level === "h3") {
        if (text.includes('参数') || text.includes('Props') || text.includes('props')) {
          return 'params';
        } else if (text.includes('返回') || text.includes('return') || text.includes('Return')) {
          return 'return';
        }
      }
      return null;
    },

    /**
     * 第二步：折叠/展开
     */
    toggleCollapse(item) {
      item.collapsed = !item.collapsed;
    },

    /**
     * 第三步：跳转到对应标题（若需平滑滚动，可自定义逻辑）
     */
    scrollToAnchor(href) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      // 或者直接使用 location.hash = href;
    },
  },
};
</script>

<style scoped>
.custom-toc {
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 8px;
}

/* 列表样式 */
.toc-list,
.sub-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

/* 每个 H2 标题组的样式 */
.toc-item {
  margin-bottom: 0;
  padding: 12px;
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  margin-top: 16px;
}

/* 标题行 */
.toc-item-title {
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  cursor: pointer;
  user-select: none;
}

.toc-item-title:hover {
  background-color: var(--vp-c-bg-mute);
  border-radius: 4px;
}

/* 标题内容容器 */
.title-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 32px;
}

/* 描述文本样式 */
.title-description {
  font-size: 0.8em;
  color: var(--vp-c-text-3);
  margin: 0 24px 4px 24px;
  line-height: 1.4;
  cursor: text;
}

/* 当有子列表时才添加底部间距 */
.toc-item-title:has(+ .sub-list) {
  margin-bottom: 8px;
}

/* 按钮样式 */
.toggle-btn {
  margin-left: 8px;
  background: none;
  border: none;
  color: var(--vp-c-text-2);
  padding: 2px;
  font-size: 12px;
  transition: transform 0.2s ease;
  position: relative;
  width: 24px;
  height: 24px;
  pointer-events: none;
}

.toggle-btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: translate(-50%, -75%) rotate(45deg);
  transition: transform 0.2s ease;
}

/* 折叠状态时箭头向左旋转 */
.toggle-btn:hover {
  color: var(--vp-c-brand);
}

/* 当父元素折叠时，箭头旋转到左边 */
.toc-item-title:has(+ .sub-list:not([style*="display: none"])) .toggle-btn::after {
  transform: translate(-50%, -50%) rotate(-135deg);
}

/* 子标题列表 */
.sub-list {
  margin-top: 4px;
  padding-left: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

/* H2 标题样式 */
.h2 {
  color: var(--vp-c-text-1);
}

/* H2 链接样式 */
.h2 a {
  font-weight:700;
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.h2 a:hover {
  color: var(--vp-c-brand);
}

/* H3 标题样式 */
.h3 {
  font-size: 0.9em;
  margin: 0;
  color: var(--vp-c-text-1);
  flex: 0 1 calc(50% - 8px);
  min-width: 200px;
}

/* H3 链接样式 */
.h3 a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
  padding: 2px 0;
}

.h3 a:hover {
  color: var(--vp-c-brand);
}

/* H4 标题样式 */
.h4 {
  font-size: 0.85em;
  margin: 0;
  color: var(--vp-c-text-2);
  border-left: 2px solid var(--vp-c-divider-light);
  line-height: 1;
}

.h4 a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
  display: block;
}

.h4 a:hover {
  color: var(--vp-c-brand);
}

/* H4 列表容器 */
.h4-list {
  list-style: none;
  padding-left: 0;
  margin: 1px 0 4px 0;
}

/* 添加图标基础样式 */
.icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  vertical-align: middle;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

/* 参数图标 */
.icon.params {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABX0lEQVR4nO2YO0oEQRCGPwxMNHQEU81MNHBBz7GPSBCvoIKJsY/d+3gLk2WDcc00WMUDiM+WllpoGibYpbrZceqDYoKBv+rvqZ7pKTAMwzCMf846MAAegHfAKYXXGgN9oEhVfAt4USy6Kp4ll/rK5yjeBSZUn8QgEH8F2sCKor7X6oj2NM+Nov5ff06FffGp6AZ5Sk3hcMNqrnzMarSx1Qj7MzUuRS4z0KQn8CR5HhfZwD5wWHFvF7gEdlhAA8tS3BfwQUacgoFt4C7Q+aYmBpaAE+At0vkBzueIM2Arp4HbBGel0gzM2EKnFS10PUdcAJvMSKM3cfwavZLX6CcZccofsgPguOLeBnAk11oeJUaSZ6gpaqfRJp1GXYpctf+lHAfCfnqQil6qn/p+NFbpympp4bV60VjFf3XVKGTY5DLFBFhDmVYmExNgj0QUMjG7TzDcLaVt1FfeMAzDMKgDv1QyYk1MvhZtAAAAAElFTkSuQmCC');
}

/* 返回值图标 */
.icon.return {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZ0lEQVR4nO2YvS4EURTHf1iJeqkVYl/AC2g3QhQUrK3obSmWtVNK9g18tHgCH9GKGom3QIVGMXKTu8mJ2GRx7jWX80tOcjPF/3/OzJ2Zcw8YhmEYxh9mHrgAnoBcMZzeOTAXKvFB4FA56V6x7/1UaUdKPvfR0kx+DHgV4kfApKaB1zsWHi/AqJZ4TQjfAEOEoQTcCq9lLeGmEO0Qlo7w2tQSzYSoW4ckC+FlBfynJ7AmvFZTLKAENIB1v+4y7q+NFL2AXmx7/3tgigQLyEQOb8AuMBy7ANff1IGNb8TlJ+3Gdb8dgVYB9QA90zMwbQX0yQCw4vfvV+OqCFso+Zf4J7RS+oxWfUgm/A+u8D+yReG1oCUas4C28HJrFayd/u2b1Uz9SFn7cKiXba4mTvdOeC2FGqucABV0qXjdXIxVypoGO5EHW1so41rhg0jJ74UYLXaZBc6AR+WkH4BTYCZU4oZhGIZBCrwDEylijEopwLcAAAAASUVORK5CYII=');
}

/* 添加 H2 章节图标 */
.icon.section {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZ0lEQVR4nO3WwQmAQAwF0SlPt/+zC4t9RGxAZRH84DzIPTkEBiRJek8DOlDh04H16pARsGQ9nP0Xh6zAFrBk3cy54zL7P5IkSR9pZjxZ9TsCyrbMeEmSpGzNjCerfkdAnpcZL0kScw7zFAKxsVXx1wAAAABJRU5ErkJggg==');
}

/* 暗黑模式下反转图标颜色 */
:root.dark .icon {
  filter: invert(1);
}

/* 调整 H2 的链接样式，使其更好地对齐图标 */
.h2 > a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

/* 调整 H3 的链接样式，使其更好地对齐图标 */
.h3 > a {
  display: flex;
  align-items: center;
  padding: 4px 0;
  font-weight: 500;
}
</style>