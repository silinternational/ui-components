<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-button -->
<script>
import { MDCRipple } from '@material/ripple'
import { onMount } from 'svelte'

/** @type {boolean} if the button is disabled or not */
export let disabled = false
/** @type {boolean} if the button used outlined styling or not */
export let outlined = false
/** @type {boolean} if the button uses raised styling or not */
export let raised = false
/** @type {string} the prepend icon */
export let prependIcon = undefined
/** @type {string} the append icon */
export let appendIcon = undefined
/** @type {string} the URL of the button. If used the element will be an anchor. */
export let url = undefined
/** @type {string} the `target` attribute of the anchor element if `url` is used */
export let target = ''

let element = {}
onMount(() => {
  const ripple = new MDCRipple(element)
  return () => ripple.destroy()
})
</script>

{#if url}
  <a
    class="mdc-button {$$props.class || ''}"
    href={url}
    role="button"
    class:mdc-button--outlined={outlined}
    class:mdc-button--raised={raised}
    {target}
    {disabled}
    on:click
    bind:this={element}
  >
    <div class="mdc-button__ripple" />

    {#if prependIcon}
      <i class="material-icons mdc-button__icon" aria-hidden="true">{prependIcon}</i>
    {/if}

    <span class="mdc-button__label"><slot /></span>

    {#if appendIcon}
      <i class="material-icons mdc-button__icon" aria-hidden="true">{appendIcon}</i>
    {/if}
  </a>
{:else}
  <button
    class="mdc-button {$$props.class || ''}"
    class:mdc-button--outlined={outlined}
    class:mdc-button--raised={raised}
    {disabled}
    on:click
    on:mousedown
    on:blur
    on:focus
    bind:this={element}
  >
    <div class="mdc-button__ripple" />

    {#if prependIcon}
      <i class="material-icons mdc-button__icon" aria-hidden="true">{prependIcon}</i>
    {/if}

    <span class="mdc-button__label"><slot /></span>

    {#if appendIcon}
      <i class="material-icons mdc-button__icon" aria-hidden="true">{appendIcon}</i>
    {/if}
  </button>
{/if}
