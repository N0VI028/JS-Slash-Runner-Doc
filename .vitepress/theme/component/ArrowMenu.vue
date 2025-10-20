<template>
  <div
    ref="menuWrapper"
    class="arrow-menu"
    :class="[`arrow-menu--${resolvedTrigger}`]"
    @mouseenter="handleHoverEnter"
    @mouseleave="handleHoverLeave"
  >
    <div ref="triggerRef" class="arrow-menu__trigger" @click.stop="handleTriggerClick">
      <slot name="trigger">
        <button type="button" class="arrow-menu__default-trigger">打开菜单</button>
      </slot>
    </div>
    <transition name="arrow-menu-fade">
      <div
        v-if="isOpen"
        ref="contentRef"
        class="arrow-menu__content"
        :class="[`arrow-menu__content--${resolvedDirection}`]"
        :style="contentStyle"
        @click.stop
        @mouseenter="handleHoverEnter"
        @mouseleave="handleHoverLeave"
      >
        <slot name="default" :items="items" :close="close">
          <button
            v-for="item in items"
            :key="itemKey(item)"
            type="button"
            class="arrow-menu__button"
            :class="{ 'arrow-menu__button--disabled': item.disabled }"
            :disabled="item.disabled"
            @click="() => handleItemClick(item)"
          >
            {{ item.label }}
          </button>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  PropType,
  ref,
  watch,
  reactive,
  type CSSProperties,
} from 'vue';

interface MenuItem {
  label: string;
  value?: string | number;
  disabled?: boolean;
}

const props = defineProps({
  items: {
    type: Array as PropType<MenuItem[]>,
    default: () => [],
  },
  trigger: {
    type: String as PropType<'click' | 'hover'>,
    default: 'click',
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'vertical',
  },
  closeOnSelect: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits<{
  (event: 'select', item: MenuItem): void;
  (event: 'open-change', opened: boolean): void;
}>();

const isOpen = ref(false);
const menuWrapper = ref<HTMLElement | null>(null);
const triggerRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);
const contentStyle = reactive<CSSProperties>({});
let hoverTimer: ReturnType<typeof setTimeout> | null = null;

const resolvedTrigger = computed(() => (props.trigger === 'hover' ? 'hover' : 'click'));
const resolvedDirection = computed(() => (props.direction === 'horizontal' ? 'horizontal' : 'vertical'));

const updateContentPosition = () => {
  if (!isOpen.value) return;
  const triggerEl = triggerRef.value;
  if (!triggerEl) return;

  const left = triggerEl.offsetLeft + triggerEl.offsetWidth / 2;
  Object.assign(contentStyle, { left: `${left}px` });
};

const open = () => {
  if (!isOpen.value) {
    isOpen.value = true;
    emit('open-change', true);
    nextTick(() => {
      updateContentPosition();
    });
  }
};

const close = () => {
  if (isOpen.value) {
    isOpen.value = false;
    emit('open-change', false);
  }
};

const toggle = () => {
  if (isOpen.value) {
    close();
  } else {
    open();
  }
};

const handleTriggerClick = () => {
  if (resolvedTrigger.value !== 'click') return;
  toggle();
};

const handleHoverEnter = () => {
  if (resolvedTrigger.value === 'hover') {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      hoverTimer = null;
    }
    open();
  }
};

const handleHoverLeave = () => {
  if (resolvedTrigger.value === 'hover') {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
    }
    hoverTimer = setTimeout(() => {
      close();
      hoverTimer = null;
    }, 140);
  }
};

const handleItemClick = (item: MenuItem) => {
  if (item.disabled) return;
  emit('select', item);
  if (props.closeOnSelect) {
    close();
  }
};

const itemKey = (item: MenuItem) => item.value ?? item.label;

const handleClickOutside = (event: MouseEvent) => {
  const wrapper = menuWrapper.value;
  if (!wrapper) return;
  if (!wrapper.contains(event.target as Node)) {
    close();
  }
};

const handleKeyUp = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    close();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keyup', handleKeyUp);
  window.addEventListener('resize', updateContentPosition);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keyup', handleKeyUp);
  window.removeEventListener('resize', updateContentPosition);
  if (hoverTimer) {
    clearTimeout(hoverTimer);
  }
});

watch(resolvedTrigger, () => {
  close();
});

watch(
  () => props.items,
  () => {
    if (!isOpen.value) return;
    nextTick(() => {
      updateContentPosition();
    });
  },
  { deep: true },
);

watch(resolvedDirection, () => {
  if (!isOpen.value) return;
  nextTick(() => {
    updateContentPosition();
  });
});

watch(isOpen, opened => {
  if (opened) {
    nextTick(() => {
      updateContentPosition();
    });
  }
});
</script>

<style scoped>
.arrow-menu {
  position: relative;
  display: inline-block;
}

.arrow-menu__trigger {
  display: inline-flex;
  align-items: center;
}

.arrow-menu__default-trigger {
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-border);
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

.arrow-menu__default-trigger:hover {
  background-color: var(--vp-c-bg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.arrow-menu__content {
  position: absolute;
  top: calc(100% + 8px);
  padding: 10px;
  border-radius: 5px;
  background-color: var(--vp-c-bg);
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.18);
  border: 1px solid var(--vp-c-border);
  z-index: 20;
  display: flex;
  gap: 5px;
  transform: translateX(-50%);
}

.arrow-menu__content::before {
  content: '';
  position: absolute;
  top: -3px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  background-color: var(--vp-c-bg);
  border-left: 1px solid var(--vp-c-border);
  border-top: 1px solid var(--vp-c-border);
  transform-origin: center;
  rotate: 45deg;
  z-index: -1;
}

.arrow-menu__content--horizontal {
  flex-direction: row;
}

.arrow-menu__content--vertical {
  flex-direction: column;
}

.arrow-menu__content :deep(.arrow-menu__button) {
  border-radius: 6px;
  border: none;
  background-color: transparent;
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: background-color 0.2s ease;
  white-space: nowrap;
}

.arrow-menu__content :deep(.arrow-menu__button:hover) {
  color: var(--vp-c-brand-3);
}

.arrow-menu__content :deep(.arrow-menu__button--disabled) {
  opacity: 0.5;
  cursor: not-allowed;
}

.arrow-menu-fade-enter-active,
.arrow-menu-fade-leave-active {
  transition: opacity 0.16s ease, transform 0.16s ease;
}

.arrow-menu-fade-enter-from,
.arrow-menu-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-4px);
}

@keyframes arrow-menu-pop {
  0% {
    transform: translateX(-50%) translateY(8px) scale(0.95);
    opacity: 0;
  }
  100% {
    transform: translateX(-50%) translateY(0) scale(1);
    opacity: 1;
  }
}
</style>
