<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-button -->
<script>
import { MDCRipple } from '@material/ripple'
import { onMount } from 'svelte'

/** @type {string} The icon to be displayed on the button. */
export let icon
/** @type {string} The aria-label for the button. */
export let ariaLabel
/** @type {string} The url to be used if the button is a link. */
export let url = ''
/** @type {boolean} Whether the button is disabled or not. */
export let disabled = false
/** @type {string} The target for the link. */
export let target = ''

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
    class="mdc-icon-button material-icons {$$props.class || ''}"
    aria-label={ariaLabel}
    {disabled}
    {target}
    on:click
    on:mousedown
    on:blur
    on:focus
    bind:this={element}
  >
    <div class="mdc-icon-button__ripple" />
    <span class="mdc-icon-button__focus-ring" />
    {icon}
  </a>
{:else}
  <button
    class="mdc-icon-button material-icons {$$props.class || ''}"
    aria-label={ariaLabel}
    {disabled}
    on:click
    on:mousedown
    on:blur
    on:focus
    bind:this={element}
  >
    <div class="mdc-icon-button__ripple" />
    <span class="mdc-icon-button__focus-ring" />
    {icon}
  </button>
{/if}
