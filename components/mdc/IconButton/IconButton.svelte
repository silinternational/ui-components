<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-button -->
<script>
import { MDCRipple } from '@material/ripple'
import { onMount } from 'svelte'

export let icon
export let ariaLabel
export let url = ''
export let disabled = false

let element = {}
onMount(() => {
  const ripple = new MDCRipple(element)

  ripple.unbounded = true

  return () => ripple.destroy()
})
</script>

{#if url}
  <a
    href={url}
    role="button"
    class="mdc-icon-button material-icons {$$props.class}"
    aria-label={ariaLabel}
    {disabled}
    on:click
    on:mousedown
    on:blur
    on:focus
    bind:this={element}>
    <div class="mdc-icon-button__ripple"></div>
    <span class="mdc-icon-button__focus-ring"></span>
    {icon}
</a>
{:else}
  <button
    class="mdc-icon-button material-icons {$$props.class}"
    aria-label={ariaLabel}
    {disabled}
    on:click
    on:mousedown
    on:blur
    on:focus
    bind:this={element}>
    <div class="mdc-icon-button__ripple"></div>
    <span class="mdc-icon-button__focus-ring"></span>
    {icon}
  </button>
{/if}
