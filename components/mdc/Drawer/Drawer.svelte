<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer -->
<script>
import { isAboveTablet as isDesktop } from '../breakpoints'
import { MDCDrawer } from '@material/drawer'
import { beforeUrlChange } from '@roxi/routify'
import { onMount } from 'svelte'
import TopAppBar from '../TopAppBar'

export let title = ''
export let subtitle = ''
export let menuItems = []

let mdcDrawer = {}
let element = {}

onMount(() => {
  mdcDrawer = new MDCDrawer(element)

  showAppropriateDrawer()

  return () => mdcDrawer.destroy()
})

const isMenuItemActive = (currentUrl, menuItemUrl) => currentUrl === menuItemUrl

$: currentUrl = window.location.pathname

$beforeUrlChange(({ url }) => {
  currentUrl = url

  return true
})

const showAppropriateDrawer = () => {
  isDesktop() ? showStandardDrawer() : showModalDrawer()
}
const showModalDrawer = () => {
  element.classList && element.classList.add("mdc-drawer--modal")
}
const showStandardDrawer = () => {
  element.classList && element.classList.remove("mdc-drawer--modal")
}
const closeDrawer = () => mdcDrawer.open = false
const toggleDrawer = () => mdcDrawer.open = !mdcDrawer.open
</script>

<style>
:global(body) {
  display: flex; /* The MDC Drawer page structure depends on a `flex` parent, right now `pages/_layout.svelte` ensures the appropriate structure, i.e., the Drawer is a child of the body. */
}

/* ref: https://material.io/develop/web/components/navigation-drawer */
.app-content {
  flex: auto;
  overflow: auto;
  position: relative;
}
main {
  overflow: auto;

  background: #fafafa; /* didn't like the way the spec kept the bg color of the drawer and the main exactly the same. */
}

/* TODO: keep an eye on this bug https://github.com/material-components/material-components-web/issues/5242, overriding for now so menu items will take on the themed color */
.mdc-drawer .mdc-list-item--activated,
.mdc-drawer .mdc-list-item--activated .mdc-list-item__graphic {
  color: var(--mdc-theme-primary-variant);
}
.mdc-list {
  /* override built-in padding so height 100 works correctly without creating a vertical scroller */
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.mdc-list-item {
  /* changing the list to flex causes the margins to not collapse */
  margin: 4px 8px;
}
</style>

<svelte:window on:resize={showAppropriateDrawer}/>

<aside class="mdc-drawer mdc-drawer--modal" bind:this={element}>
  {#if title || subtitle}
    <div class="mdc-drawer__header mt-1">
      <slot name="header"/>
    </div>
  {/if}

  <div class="mdc-drawer__content">
    <nav class="mdc-list" on:click={closeDrawer}>
      {#each menuItems as {icon, label, url, hide}, i}
        {#if label === '--break--'}
          <span class="grow-1" />
        {:else if !hide}
          {#if url}
            <a class="mdc-list-item" class:mdc-list-item--activated={isMenuItemActive(currentUrl, url)} href={url}
              aria-current={isMenuItemActive(currentUrl, url) ? "page" : null} tabindex={i === 0 ? 0 : undefined}>
              <span class="mdc-list-item__ripple" />
              {#if icon}
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">{icon}</i>
              {/if}
              <span class="mdc-list-item__text">{label}</span>
            </a>
          {:else}
            <hr class="mdc-list-divider mdc-list-divider--inset-leading mdc-list-divider--inset-trailing" role="separator" />
          {/if}
        {/if}
      {/each}
    </nav>
  </div>
</aside>

<div class="mdc-drawer-scrim" />

<div class="app-content">
  <TopAppBar dense fixed on:nav={toggleDrawer} navIconBreakpointClass="hide-above-tablet" />

  <main class="h-100">
    <div class="mdc-top-app-bar--dense-fixed-adjust h-100">
      <slot />
    </div>
  </main>
</div>
