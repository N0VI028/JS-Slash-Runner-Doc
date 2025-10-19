<template>
  <button @click="handleClick" class="my-button">
    <slot>点击跳转</slot>
  </button>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true
  }
})

function handleClick() {
  window.open(props.url, '_blank')
}
</script>

<style scoped>
.my-button {
  padding: 6px 10px;
  border-radius: 4px;
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
  cursor: pointer;
  transition: all 0.2s;

}

.my-button:hover {
  background: var(--vp-c-brand-soft);
}
</style>