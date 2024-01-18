<script>
/** @type {string} the background color of the chip */
export let bgColor = '#e5e5e5'
/** @type {string} sets the height of the component not including margin*/
export let height = '36px'
</script>

<style>
.chip {
  background-color: var(--theme-color);
  height: var(--theme-height);
  display: inline-flex;
  margin: 0 2rem 1rem 0;
  border-radius: 16px;
}

.chip-content {
  display: flex;
  padding-left: 12px;
  padding-right: 12px;
  vertical-align: middle;
  align-items: center;
  font-size: 14px;
}
</style>

<div class="mdc-typography chip {$$props.class || ''}" style="--theme-color: {bgColor}; --theme-height: {height}">
  <div class="chip-content">
    <slot />
  </div>
</div>
