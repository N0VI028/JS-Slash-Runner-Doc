import { NolebaseInlineLinkPreviewPlugin } from '@nolebase/vitepress-plugin-inline-link-preview/client';
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css';
import BackToTop from '@theme/component/BackToTop.vue';
import CustomTOC from '@theme/component/CustomTOC.vue';
import DocViews from '@theme/component/DocViews.vue';
import FeatureCarousel from '@theme/component/FeatureCarousel.vue';
import MyButton from '@theme/component/MyButton.vue';
import { useVisitData } from '@theme/composable/useVisitData';
import { inBrowser, Theme } from 'vitepress/client';
import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import './styles/main.css';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(BackToTop),
      'doc-footer-before': () => h(DocViews),
    });
  },
  enhanceApp({ app, router }: { app: any; router: any }) {
    app.component('MyButton', MyButton);
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
} satisfies Theme;
