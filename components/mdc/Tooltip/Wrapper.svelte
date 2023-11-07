<script>
/** @type {string} The id of the element that describes the tooltip. */
export let ariaDescribedBy
</script>

<div class={$$props.class || ''} aria-describedby={ariaDescribedBy}>
  <slot />
</div>
