<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-fab -->
<script>
import { MDCRipple } from '@material/ripple'
import { onMount } from 'svelte'

/** @type {string} The icon to be displayed on the button. */
export let icon = 'add'
/** @type {string} The aria-label for the button. */
export let label = ''
/** @type {boolean} Whether the button is mini or not. */
export let mini = false
/** @type {boolean} Whether the button is extended or not. */
export let extended = false
/** @type {string} The url to be used if the button is a link. */
export let url = ''
/** @type {Function} The function to be executed for the button click event. */
export let action = {}
/** @type {string} The target for the link. */
export let target = ''

let element = {}

onMount(() => {
  const ripple = new MDCRipple(element)
  return () => ripple.destroy()
})
</script>

<style>
.mdc-fab {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}
</style>

{#if mini}
  <button on:click={action} class="mdc-fab mdc-fab--mini {$$props.class || ''}" aria-label={label} bind:this={element}>
    <div class="mdc-fab__ripple" />
    <span class="mdc-fab__icon material-icons">{icon}</span>
  </button>
{:else if extended}
  <button on:click={action} class="mdc-fab mdc-fab--extended {$$props.class || ''}" bind:this={element}>
    <div class="mdc-fab__ripple" />
    <span class="material-icons mdc-fab__icon">{icon}</span>
    <span class="mdc-fab__label">{label}</span>
  </button>
{:else if url}
  <a class="mdc-fab {$$props.class || ''}" aria-label={label} bind:this={element} href={url} {target}>
    <div class="mdc-fab__ripple" />
    <span class="mdc-fab__icon material-icons">{icon}</span>
  </a>
{:else}
  <button on:click={action} class="mdc-fab {$$props.class || ''}" aria-label={label} bind:this={element}>
    <div class="mdc-fab__ripple" />
    <span class="mdc-fab__icon material-icons">{icon}</span>
  </button>
{/if}
