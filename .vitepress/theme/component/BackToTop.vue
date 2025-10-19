<template>
  <div
    class="back-to-top"
    :class="{ 'show': show }"
    @click="scrollToTop"
    role="button"
    aria-label="Back to top"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'BackToTop',
  data() {
    return {
      show: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      // 当页面滚动超过 300px 时显示按钮
      this.show = window.pageYOffset > 300
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.back-to-top {
  position: fixed;
  right: 4rem;
  bottom: 2rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--vp-c-brand-1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.3s ease;
  z-index: 10;
}

.back-to-top.show {
  opacity: 1;
  transform: translateY(0);
}

.back-to-top:hover {
  background-color: var(--vp-c-brand-2);
}

.icon {
  width: 20px;
  height: 20px;
  fill: white;
  opacity: 1 !important;
}

/* 适配暗色模式 */
:root.dark .back-to-top {
  background-color: var(--vp-c-gray-1);
}

:root.dark .back-to-top:hover {
  background-color: var(--vp-c-gray-3);
}

/* 响应式布局适配 */
@media (max-width: 1280px) {
  .back-to-top {
    right: 2rem;
  }
}

@media (max-width: 768px) {
  .back-to-top {
    right: 1rem;
    width: 36px;
    height: 36px;
  }

  .icon {
    width: 18px;
    height: 18px;
  }
}
</style> 