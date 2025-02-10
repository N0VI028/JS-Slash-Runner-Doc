<template>
  <div class="data-panel">
    <div class="data-panel-item">
      本站总访问量
      <span id="vercount_value_site_pv" class="data-number">--</span> 次
    </div>
    <div class="data-panel-item">
      本站访客数
      <span id="vercount_value_site_uv" class="data-number">--</span> 人次
    </div>
  </div>
</template>

<style scoped>
.data-panel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0 -40px 0;
  padding: 12px 24px;
  background-color: transparent;
  border-radius: 12px;
  font-size: 0.8rem;
}

.data-panel::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  padding: 1px;
  background: linear-gradient(
    45deg,
    var(--vp-c-brand-1),
    var(--vp-c-brand-2)
  );
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.data-number{
  font-size: 1rem;
  font-weight: 700;
}

@media (max-width: 375px) {
  .data-panel {
    flex-direction: column;
  }
}
</style>
