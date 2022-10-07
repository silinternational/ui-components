<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-button -->
<svelte:options tag="sil-button" />

<script>
import { MDCRipple } from '@material/ripple'
import { onMount } from 'svelte'

export let disabled = false
export let outlined = false
export let raised = false
export let prependIcon = undefined
export let appendIcon = undefined
export let url = undefined

let element = {}
onMount(() => {
  const ripple = new MDCRipple(element)
  return () => ripple.destroy()
})
</script>

{#if url}
  <a
    class="mdc-button {$$props.class}"
    href={url}
    role="button"
    class:mdc-button--outlined={outlined}
    class:mdc-button--raised={raised}
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
    class="mdc-button {$$props.class}"
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
