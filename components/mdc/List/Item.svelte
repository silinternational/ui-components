<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-list -->
<script>
import { MDCRipple } from '@material/ripple'
import { onMount } from 'svelte'

/** @type {boolean} if the list item is activated or not */
export let activated = false
/** @type {string} the URL of the graphic */
export let graphicURL = ''
/** @type {string} the alt text of the graphic */
export let graphicAlt = ''
/** @type {string} the icon name */
export let icon = ''
/** @type {string} the meta text above the "meta" slot */
export let meta = ''
/** @type {string} the primary text (above 'secondary' and 'text' props) */
export let primary = ''
/** @type {string} the secondary text (below primary text) */
export let secondary = ''
/** @type {string} the text above the default slot */
export let text = ''
/** @type {boolean} if the list item has a divider or not */
export let withDivider = false
/** @type {boolean} if the list item is non-interactive or not */
export let nonInteractive = false
/** @type {number} the tabindex of the list item */
export let tabindex = undefined

let element = {}
onMount(() => {
  const ripple = new MDCRipple(element)
  return () => ripple.destroy()
})
</script>

<style>
img {
  max-height: 100%;
  max-width: 100%;
}

/* MDC List items are meant to be interactive but when disabled, we still want to the main text to pop a little, so we need to override MDC on this one. */
.nonInteractive {
  opacity: initial;
}
</style>

<li
  bind:this={element}
  class="mdc-deprecated-list-item {$$props.class || ''}"
  class:mdc-deprecated-list-item--activated={activated}
  class:mdc-deprecated-list-item--disabled={nonInteractive}
  data-mdc-dialog-action={$$props['data-mdc-dialog-action']}
  on:click
  on:keydown
  on:keypress
  on:keyup
  {tabindex}
>
  {#if graphicURL}
    <div class="mdc-deprecated-list-item__graphic">
      <img class="br-50" alt={graphicAlt} src={graphicURL} />
    </div>
  {:else if icon}
    <i class="material-icons mdc-deprecated-list-item__graphic" aria-hidden="true">{icon}</i>
  {/if}

  <span class="mdc-deprecated-list-item__ripple" />

  <span class="mdc-deprecated-list-item__text" class:nonInteractive>
    {#if primary || secondary}
      <span class="mdc-deprecated-list-item__primary-text">{primary}</span>
      <span class="mdc-deprecated-list-item__secondary-text">{secondary}</span>
    {:else}
      {text}
      <slot />
    {/if}
  </span>

  <div class="mdc-deprecated-list-item__meta">
    {meta}
    <slot name="meta" />
  </div>
</li>

{#if withDivider}
  <li role="separator" class="mdc-deprecated-list-divider" />
{/if}
