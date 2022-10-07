<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-tab-bar -->
<svelte:options tag="sil-tab-bar" />

<script>
import { MDCTabBar } from '@material/tab-bar'
import { onMount } from 'svelte'

export let tab = 0

let element = {}
let tabBar = {}

$: tabBar.activateTab && tabBar.activateTab(tab)

onMount(() => {
  tabBar = new MDCTabBar(element)
  return () => tabBar.destroy()
})
</script>

<style>
.mdc-tab-bar {
  background-color: var(--mdc-theme-background);
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
}
</style>

<div class="mdc-tab-bar {$$props.class}" role="tablist" bind:this={element}>
  <slot />
</div>
