<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-tab-indicator -->
<svelte:options tag="sil-indicator" />

<script>
import { MDCTabIndicator } from '@material/tab-indicator'
import { onMount } from 'svelte'

export let active = false

let element = {}

onMount(() => {
  const indicator = new MDCTabIndicator(element)
  return () => indicator.destroy()
})
</script>

<style>
.mdc-tab-indicator__content--underline {
  border-color: var(--mdc-theme-primary);
}
</style>

<span class="mdc-tab-indicator" class:mdc-tab-indicator--active={active} bind:this={element}>
  <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
</span>
