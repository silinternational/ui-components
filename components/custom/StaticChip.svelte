<script>
export let bgColor = '#e5e5e5'
</script>

<style>
.chip {
  background-color: var(--theme-color);
  height: 36px;
}

.chip-content {
  padding-left: 12px;
  padding-right: 12px;
}
</style>

<div
  class="mdc-typography chip black flex justify-center align-items-center mb-1 mr-2 fs-14 br-16px {$$props.class}"
  style="--theme-color: {bgColor}"
>
  <div class="chip-content flex align-items-center">
    <slot />
  </div>
</div>
