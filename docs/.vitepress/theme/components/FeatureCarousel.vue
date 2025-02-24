<template>
  <swiper
    :modules="modules"
    :navigation="false"
    :pagination="{ clickable: true }"
    :autoplay="autoplayOptions"
    :breakpoints="breakpoints"
    :space-between="16"
    :slides-per-group="1"
    :slides-per-group-auto="true"
    class="feature-swiper"
    @swiper="onSwiper"
  >
    <swiper-slide v-for="(feature, index) in frontmatter.features" :key="index">
      <div class="feature">
        <h2 class="title">{{ feature.title }}</h2>
        <p class="details">{{ feature.details }}</p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useData } from "vitepress";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const { frontmatter } = useData();
    return { frontmatter };
  },
  data() {
    return {
      modules: [Navigation, Pagination, Autoplay],
      autoplayOptions: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
          slidesPerGroup: 2,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 16,
          slidesPerGroup: 3,
        },
      },
    };
  },
  methods: {
    onSwiper(swiper) {
      this.$nextTick(() => {
        const features = document.querySelectorAll(".feature");
        let maxHeight = 0;
        features.forEach((feature) => {
          const height = feature.scrollHeight;
          if (height > maxHeight) {
            maxHeight = height;
          }
        });
        features.forEach((feature) => {
          feature.style.height = `${maxHeight}px`;
        });
      });
    },
  },
};
</script>

<style scoped>
.feature-swiper {
  width: 100%;
  height: auto;
  padding: 20px 0 30px;
}

.feature {
  padding: 24px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-bg-soft);
  background: var(--vp-c-bg-soft);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.feature .title {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  padding: 0;
  border-top: none;
}

.feature .details {
  padding-top: 8px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  margin: 0;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  display: none;
}

:deep(.swiper-pagination) {
  bottom: 0;
}

:deep(.swiper-pagination-bullet-active) {
  background: var(--vp-c-brand-1);
}
</style>
