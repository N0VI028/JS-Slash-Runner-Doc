<template>
  <ArrowMenu trigger="click">
    <template #trigger>
      <div class="VPSocialLink">
        <span
          class="vpi-social-discord"
          style="--icon: url('https://api.iconify.design/simple-icons/discord.svg')"
        ></span>
      </div>
    </template>
    <template #default="{ close }">
      <a
        v-for="item in menuLinks"
        :key="item.href"
        :href="item.href"
        target="_blank"
        rel="noopener noreferrer"
        class="arrow-menu__button"
        @click="close"
      >
        {{ item.label }}
      </a>
    </template>
  </ArrowMenu>
</template>

<script setup lang="ts">
import ArrowMenu from './ArrowMenu.vue';

const menuLinks = [
  {
    label: '类脑',
    href: 'https://discord.com/channels/1134557553011998840/1296494001406345318',
  },
  {
    label: '旅程',
    href: 'https://discord.com/channels/1291925535324110879/1374297592854216774',
  },
];
</script>
<style scoped>
.VPSocialLink {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  color: var(--vp-c-text-2);
  transition: color 0.5s;
  margin-left: 5px;
  cursor: pointer;
}

.VPSocialLink:hover {
  color: var(--vp-c-text-1);
}

.vpi-social-discord {
  width: 20px;
  height: 20px;
  fill: currentColor;
}
</style>
