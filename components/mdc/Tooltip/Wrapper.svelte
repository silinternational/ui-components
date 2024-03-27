<script>
/** @type {string} The id of the element that describes the tooltip. */
export let ariaDescribedBy
/** @type {string} If the tooltip is rich set this to rich as well */
export let rich = false
</script>

<div class={(rich ? 'mdc-tooltip-wrapper--rich' : '') + ($$props.class || '')} aria-describedby={ariaDescribedBy}>
  <slot />
</div>
