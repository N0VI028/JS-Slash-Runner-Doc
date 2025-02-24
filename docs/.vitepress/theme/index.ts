import DefaultTheme from "vitepress/theme";
import { inBrowser } from "vitepress/client";
import "./styles/vars.css";
import "./styles/main.css";
import "./styles/custom.css";
import "./styles/kbd.css";
import MyButton from "./components/MyButton.vue";
import CustomTOC from "./components/CustomTOC.vue";
import BackToTop from "./components/BackToTop.vue";
import DocViews from "./components/DocViews.vue";
import FeatureCarousel from "./components/FeatureCarousel.vue";
import { h } from "vue";
import useVisitData from "./useVisitData";
import { NolebaseInlineLinkPreviewPlugin } from "@nolebase/vitepress-plugin-inline-link-preview/client";
import "@nolebase/vitepress-plugin-inline-link-preview/client/style.css";


export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "layout-bottom": () => h(BackToTop),
      "doc-footer-before": () => h(DocViews),
    });
  },
  enhanceApp({ app, router }: { app: any; router: any }) {
    app.component("MyButton", MyButton);
    app.component("CustomTOC", CustomTOC);
    app.component("DocViews", DocViews);
    app.component("FeatureCarousel", FeatureCarousel);
    app.use(NolebaseInlineLinkPreviewPlugin);
    if (inBrowser) {
      router.onAfterPageLoad = (to: string) => {
        useVisitData();
      };
    }
  },
};
