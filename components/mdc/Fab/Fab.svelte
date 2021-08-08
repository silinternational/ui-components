<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-fab -->
<script>
import { MDCRipple } from '@material/ripple'
import { goto } from '@roxi/routify'
import { onMount } from 'svelte'

export let icon = 'add'
export let label = ''
export let mini = false
export let extended = false
export let url = ''
export let action = {}

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
  <button on:click={action} class="mdc-fab mdc-fab--mini" aria-label={label} bind:this={element}>
    <div class="mdc-fab__ripple"></div>
    <span class="mdc-fab__icon material-icons">{icon}</span>
  </button>
{:else if extended}
  <button on:click={action} class="mdc-fab mdc-fab--extended" bind:this={element}>
    <div class="mdc-fab__ripple"></div>
    <span class="material-icons mdc-fab__icon">{icon}</span>
    <span class="mdc-fab__label">{label}</span>
  </button>
{:else}
  {#if url}
    <a class="mdc-fab {$$props.class}" aria-label={label} bind:this={element} href={url}>
      <div class="mdc-fab__ripple"></div>
      <span class="mdc-fab__icon material-icons">{icon}</span>
    </a>
  {:else}
    <button on:click={action} class="mdc-fab {$$props.class}" aria-label={label} bind:this={element}>
      <div class="mdc-fab__ripple"></div>
      <span class="mdc-fab__icon material-icons">{icon}</span>
    </button>
  {/if}
{/if}