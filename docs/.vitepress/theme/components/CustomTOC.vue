<template>
  <nav class="custom-toc">
    <ul class="toc-list">
      <li v-for="(item, i) in processedHeadings" :key="i" class="toc-item">
        <div class="toc-item-title h2" @click="toggleCollapse(item)">
          <div class="title-content">
            <div class="title-with-badge">
              <a
                :href="item.href"
                @click.stop.prevent="scrollToAnchor(item.href)"
                style="display: flex; align-items: center"
              >
                <span
                  v-if="item.iconType"
                  :class="['icon', item.iconType]"
                ></span>
                {{ item.text }}
                <span
                  v-if="item.hasTavernHelperBadge"
                  class="not-exported-badge"
                  >🚫TavernHelper</span
                >
              </a>
            </div>
            <button
              v-if="item.children.length"
              class="toggle-btn"
              :aria-label="item.collapsed ? '展开' : '折叠'"
            />
          </div>
          <div v-if="item.description" class="title-description" @click.stop>
            {{ item.description }}
          </div>
        </div>

        <ul v-if="!item.collapsed && item.children.length" class="sub-list">
          <li v-for="(h3Item, j) in item.children" :key="j" class="sub-item h3">
            <div class="h3-title" @click="toggleH3Collapse(h3Item)">
              <a
                :href="h3Item.href"
                @click.stop.prevent="scrollToAnchor(h3Item.href)"
              >
                <span
                  v-if="h3Item.iconType"
                  :class="['icon', h3Item.iconType]"
                ></span>
                {{ h3Item.text }}
              </a>
              <button
                v-if="h3Item.children?.length"
                class="toggle-btn h3-toggle"
                :aria-label="h3Item.collapsed ? '展开' : '折叠'"
              />
            </div>
            <ul
              v-if="h3Item.children?.length && !h3Item.collapsed"
              class="h4-list"
            >
              <li
                v-for="(h4Item, k) in h3Item.children"
                :key="k"
                class="sub-item h4"
              >
                <a
                  :href="h4Item.href"
                  @click.prevent="scrollToAnchor(h4Item.href)"
                >
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
import { nextTick, ref, computed, onMounted } from "vue";

export default {
  name: "MyCustomTOC",
  setup() {
    const rawHeadings = ref([]);

    const processedHeadings = computed(() => rawHeadings.value);

    
    const cleanText = (text) => {
      return (
        text
          ?.replace(/[\u200B-\u200D\uFEFF]/g, "")
          .replace(/\s+/g, " ")
          .trim() || ""
      );
    };

    
    const containsChinese = (text) => {
      return /[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]/.test(text);
    };

    
    const collectHeadings = () => {
      const vpDoc = document.querySelector(".VPDoc");
      if (!vpDoc) {
        return;
      }

      const h2Elements = vpDoc.querySelectorAll("h2");

      const headingsData = [];

      h2Elements.forEach((h2) => {
        
        const clonedH2 = h2.cloneNode(true);
        const badgeElement = clonedH2.querySelector("span.Badge.warning"); 
        if (badgeElement) {
          badgeElement.remove();
        }

        
        let hasTavernHelperBadge = false;
        let headingText = cleanText(clonedH2.textContent); 

        if (headingText.includes("🚫TavernHelper")) {
          hasTavernHelperBadge = true;
          headingText = headingText.replace("🚫TavernHelper", "").trim();

          
        }

        
        if (containsChinese(headingText)) {
          return; 
        }

        const h2Id = h2.id;
        const heading = {
          text: headingText, 
          href: `#${h2Id}`,
          iconType: "section",
          children: [],
          collapsed: false,
          hasTavernHelperBadge, 
        };

        
        let currentElement = h2.nextElementSibling;
        let found = false;

        while (
          currentElement &&
          !found &&
          currentElement.tagName !== "H2" &&
          currentElement.tagName !== "H3"
        ) {
          if (currentElement.tagName === "P") {
            let description = cleanText(currentElement.textContent);
            description = description.replace(/。/, "");
            heading.description = description;
            found = true;
          }
          currentElement = currentElement.nextElementSibling;
        }

        
        collectH3Headings(h2, heading, vpDoc);

        headingsData.push(heading);
      });

      rawHeadings.value = headingsData;
    };

    
    const collectH3Headings = (h2, heading, vpDoc) => {
      let currentElement = h2.nextElementSibling;

      while (
        currentElement &&
        currentElement.tagName !== "H2" &&
        vpDoc.contains(currentElement)
      ) {
        if (currentElement.tagName === "H3") {
          const h3Text = cleanText(currentElement.textContent);

          if (h3Text === "参数" || h3Text === "返回值") {
            const h3Item = {
              text: h3Text,
              href: `#${currentElement.id}`,
              iconType: h3Text === "参数" ? "params" : "return",
              children: [],
              collapsed: false,
            };

            
            processH3Content(currentElement, h3Item, h3Text);

            heading.children.push(h3Item);
          }
        }
        currentElement = currentElement.nextElementSibling;
      }
    };

    
    const processH3Content = (h3Element, h3Item, h3Type) => {
      let currentElement = h3Element.nextElementSibling;

      if (h3Type === "参数") {
        while (
          currentElement &&
          currentElement.tagName !== "H3" &&
          currentElement.tagName !== "H2"
        ) {
          if (currentElement.tagName === "H4") {
            const h4Text = cleanText(currentElement.textContent);
            h3Item.children.push({
              text: h4Text,
              href: `#${currentElement.id}`,
              children: [],
            });
          }
          currentElement = currentElement.nextElementSibling;
        }
      } else {
        
        while (currentElement && !/^H[1-6]$/.test(currentElement.tagName)) {
          if (currentElement.tagName === "UL") {
            const liElements = currentElement.querySelectorAll("li");
            liElements.forEach((li) => {
              const strongElement = li.querySelector("strong");
              if (strongElement) {
                const strongText = cleanText(strongElement.textContent);
                h3Item.children.push({
                  text: strongText,
                  href: `#${h3Element.id}`,
                  children: [],
                });
              }
            });
          }
          currentElement = currentElement.nextElementSibling;
        }
      }
    };

    
    const scrollToAnchor = (href) => {
      const id = href.slice(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    
    const toggleCollapse = (item) => {
      item.collapsed = !item.collapsed;
    };

    const toggleH3Collapse = (item) => {
      item.collapsed = !item.collapsed;
    };

    
    onMounted(() => {
      collectHeadings();
    });

    return {
      processedHeadings,
      scrollToAnchor,
      toggleCollapse,
      toggleH3Collapse,
    };
  },
};
</script>

<style scoped>
.custom-toc {
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 8px;
}

.toc-list,
.sub-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.toc-item {
  margin-bottom: 0;
  padding: 12px;
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  margin-top: 16px;
}

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

.title-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 32px;
}

.title-description {
  font-size: 0.8em;
  color: var(--vp-c-text-3);
  margin: 0 24px 4px 24px;
  line-height: 1.4;
  cursor: text;
}

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
  content: "";
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

.toggle-btn:hover {
  color: var(--vp-c-brand);
}

.toc-item-title:has(+ .sub-list:not([style*="display: none"]))
  .toggle-btn::after {
  transform: translate(-50%, -50%) rotate(-135deg);
}

.sub-list {
  margin-top: 4px;
  padding-left: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.sub-list :last-child {
  margin-bottom: 4px !important;
}
.h2 {
  color: var(--vp-c-text-1);
}

.h2 a {
  font-weight: 700;
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.h2 a:hover {
  color: var(--vp-c-brand);
}

.h3 {
  font-size: 0.9em;
  margin: 0;
  color: var(--vp-c-text-1);
  flex: 0 1 calc(50% - 8px);
  min-width: 200px;
}

.h3 a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.h3 a:hover {
  color: var(--vp-c-brand);
}

.h4 {
  font-size: 0.9em;
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

.h4-list {
  list-style: none;
  padding-left: 0;
  margin: 1px 0 4px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

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

.icon.params {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABX0lEQVR4nO2YO0oEQRCGPwxMNHQEU81MNHBBz7GPSBCvoIKJsY/d+3gLk2WDcc00WMUDiM+WllpoGibYpbrZceqDYoKBv+rvqZ7pKTAMwzCMf846MAAegHfAKYXXGgN9oEhVfAt4USy6Kp4ll/rK5yjeBSZUn8QgEH8F2sCKor7X6oj2NM+Nov5ff06FffGp6AZ5Sk3hcMNqrnzMarSx1Qj7MzUuRS4z0KQn8CR5HhfZwD5wWHFvF7gEdlhAA8tS3BfwQUacgoFt4C7Q+aYmBpaAE+At0vkBzueIM2Arp4HbBGel0gzM2EKnFS10PUdcAJvMSKM3cfwavZLX6CcZccofsgPguOLeBnAk11oeJUaSZ6gpaqfRJp1GXYpctf+lHAfCfnqQil6qn/p+NFbpympp4bV60VjFf3XVKGTY5DLFBFhDmVYmExNgj0QUMjG7TzDcLaVt1FfeMAzDMKgDv1QyYk1MvhZtAAAAAElFTkSuQmCC");
}

.icon.return {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZ0lEQVR4nO2YvS4EURTHf1iJeqkVYl/AC2g3QhQUrK3obSmWtVNK9g18tHgCH9GKGom3QIVGMXKTu8mJ2GRx7jWX80tOcjPF/3/OzJ2Zcw8YhmEYxh9mHrgAnoBcMZzeOTAXKvFB4FA56V6x7/1UaUdKPvfR0kx+DHgV4kfApKaB1zsWHi/AqJZ4TQjfAEOEoQTcCq9lLeGmEO0Qlo7w2tQSzYSoW4ckC+FlBfynJ7AmvFZTLKAENIB1v+4y7q+NFL2AXmx7/3tgigQLyEQOb8AuMBy7ANff1IGNb8TlJ+3Gdb8dgVYB9QA90zMwbQX0yQCw4vfvV+OqCFso+Zf4J7RS+oxWfUgm/A+u8D+yReG1oCUas4C28HJrFayd/u2b1Uz9SFn7cKiXba4mTvdOeC2FGqucABV0qXjdXIxVypoGO5EHW1so41rhg0jJ74UYLXaZBc6AR+WkH4BTYCZU4oZhGIZBCrwDEylijEopwLcAAAAASUVORK5CYII=");
}

.icon.section {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZ0lEQVR4nO3WwQmAQAwF0SlPt/+zC4t9RGxAZRH84DzIPTkEBiRJek8DOlDh04H16pARsGQ9nP0Xh6zAFrBk3cy54zL7P5IkSR9pZjxZ9TsCyrbMeEmSpGzNjCerfkdAnpcZL0kScw7zFAKxsVXx1wAAAABJRU5ErkJggg==");
}

:root.dark .icon {
  filter: invert(1);
}

.h2 > a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.h3-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  padding: 4px 8px 4px 0;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  gap: 8px;
}

.h3-title:hover {
  background-color: var(--vp-c-bg-mute);
}

.h3-toggle {
  transform: scale(0.8);
}

.h3-title:has(+ .h4-list:not([style*="display: none"])) .h3-toggle::after {
  transform: translate(-50%, -50%) rotate(-135deg);
}

.h3 {
  display: flex;
  flex-direction: column;
}

.h3 > .h3-title > a {
  display: inline-flex;
  align-items: center;
  padding: 4px 0;
  font-weight: 500;
  width: fit-content;
  max-width: calc(100% - 32px);
}

.h3 > .h3-title > a:hover {
  color: var(--vp-c-brand);
}

.h3 > .h3-title > a > span.icon {
  flex-shrink: 0;
}

.title-with-badge {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

/* 全局样式，应用于动态添加的元素 */
.not-exported-badge {
  height: 1.8em !important;
  display: inline-flex !important;
  align-items: center !important;
  background-color: var(--vp-badge-warning-bg) !important;
  color: var(--vp-badge-warning-text) !important;
  font-size: 0.6em !important;
  font-weight: 500 !important;
  padding: 2px 8px 2px 6px !important;
  border-radius: 99px !important;
  margin-left: 8px !important;
  cursor: pointer !important;
}
</style>
