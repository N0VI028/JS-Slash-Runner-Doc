import { NolebaseInlineLinkPreviewPlugin } from '@nolebase/vitepress-plugin-inline-link-preview/client';
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css';

import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';

import BackToTop from '@theme/component/BackToTop.vue';
import ArrowMenu from '@theme/component/ArrowMenu.vue';
import CustomTOC from '@theme/component/CustomTOC.vue';
import DocViews from '@theme/component/DocViews.vue';
import FeatureCarousel from '@theme/component/FeatureCarousel.vue';
import MyButton from '@theme/component/MyButton.vue';
import { useVisitData } from '@theme/composable/useVisitData';
import { inBrowser, Theme } from 'vitepress/client';
import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import './styles/main.css';
import Discord from './component/Discord.vue';


export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(BackToTop),
      'doc-footer-before': () => h(DocViews),
      'nav-bar-content-after': () => h(Discord),
    });
  },
  enhanceApp({ app, router }: { app: any; router: any }) {
    app.component('MyButton', MyButton);
    app.component('ArrowMenu', ArrowMenu);
    app.component('CustomTOC', CustomTOC);
    app.component('DocViews', DocViews);
    app.component('FeatureCarousel', FeatureCarousel);
    app.use(NolebaseInlineLinkPreviewPlugin);
    if (inBrowser) {
      router.onAfterPageLoad = (to: string) => {
        useVisitData();
      };
    }
  },
  setup() {
    // 图片放大
    const route = useRoute();
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
} satisfies Theme;
