<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-list -->
<script>
import { MDCRipple } from '@material/ripple'
import { onMount } from 'svelte'

export let activated = false
export let graphicURL = ''
export let graphicAlt = ''
export let icon = ''
export let meta = ''
export let primary = ''
export let secondary = ''
export let text = ''
export let withDivider = false
export let nonInteractive = false
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
  class="mdc-deprecated-list-item {$$props.class}"
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
