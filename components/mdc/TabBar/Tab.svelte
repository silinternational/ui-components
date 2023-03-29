<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-tab -->
<script>
import Indicator from './Indicator.svelte'
import { MDCTab } from '@material/tab'
import { onMount } from 'svelte'

export let active = false
export let label

let element = {}

onMount(() => {
  const tab = new MDCTab(element)
  return () => tab.destroy()
})
</script>

<style>
.mdc-tab--active .mdc-tab__text-label {
  color: var(--mdc-theme-primary);
  opacity: 100%;
}

.mdc-tab__text-label {
  color: var(--mdc-theme-text-secondary-on-background);
  opacity: 50%;
}
</style>

<button
  class="mdc-tab mdc-tab--stacked mdc-tab--min-width"
  class:mdc-tab--active={active}
  role="tab"
  aria-selected={active}
  tabindex="-1"
  bind:this={element}
  on:click
>
  <span class="mdc-tab__content">
    <span class="mdc-tab__text-label">{label}</span>
  </span>
  <Indicator {active} />
  <span class="mdc-tab__ripple" />
</button>
