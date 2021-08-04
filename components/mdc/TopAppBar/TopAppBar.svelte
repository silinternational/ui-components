<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-top-app-bar -->
<script>
import actions from './actions'
import { MDCTopAppBar } from '@material/top-app-bar'
import { createEventDispatcher, onMount } from 'svelte'
import title from './title'

export let bgColorIsVariant = false
export let dense = false
export let fixed = false
export let navIconBreakpointClass = ''

const dispatch = createEventDispatcher()

let element = {}

onMount(() => {
  const topAppBar = new MDCTopAppBar(element)

  topAppBar.listen('MDCTopAppBar:nav', () => dispatch('nav'))
  
  return () => topAppBar.destroy()
})
</script>

<style>
.bg-color-variant {
  background-color: var(--mdc-theme-primary-variant);  /* had to override this because we're going against the MDC spec that the top app bar should be the primary color. */
}
</style>

<header class="mdc-top-app-bar absolute"
        class:mdc-top-app-bar--dense={dense}
        class:mdc-top-app-bar--fixed={fixed}
        class:bg-color-variant={bgColorIsVariant}
        bind:this={element}>
  <div class="mdc-top-app-bar__row">
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button {navIconBreakpointClass}" aria-label="Open navigation menu">menu</button>
      
      <slot />

      <span class="mdc-top-app-bar__title">{$title}</span>
    </section>
    
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
      <slot name="actions"/>

      {#each $actions as { icon, onClick, label }}
        <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label={label} on:click={onClick}>{icon}</button>
      {/each}
    </section>
  </div>
</header>
