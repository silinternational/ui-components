<script>
export let ariaDescribedBy
</script>

<div class={$$props.class || ''} aria-describedby={ariaDescribedBy}>
  <slot />
</div>
