<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer -->
<script>
import { isAboveTablet as isDesktop } from '../breakpoints'
import { MDCDrawer } from '@material/drawer'
import { Button, TopAppBar } from '../index'
import { beforeUrlChange } from '@roxi/routify'
import { onMount } from 'svelte'

export let title = ''
export let subtitle = ''
export let menuItems = []
export let hasTopAppBar = true
export let modal = false
export let dismissible = false
export let toggle = false
export let isFullHeightMenu = true
export let classForContent = '' //can be used to change background color

let mdcDrawer = {}
let element = {}

onMount(() => {
  mdcDrawer = new MDCDrawer(element)

  showAppropriateDrawer()

  return () => mdcDrawer.destroy()
})

const isMenuItemActive = (currentUrl, menuItemUrl) => currentUrl === menuItemUrl

$: currentUrl = window.location.pathname
$: toggle, toggleDrawer()
$: !dismissible && (modal = true) //prevents error if neither is selected

$beforeUrlChange(({ url }) => {
  currentUrl = url

  return true
})

const showAppropriateDrawer = () => {
  isDesktop() && !dismissible ? showStandardDrawer() : showModalDrawer()
}
const showModalDrawer = () => modal = true
const showStandardDrawer = () => modal = false
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
}
main {
  overflow: auto;

  background: #fafafa; /* didn't like the way the spec kept the bg color of the drawer and the main exactly the same. */
}

/* TODO: keep an eye on this bug https://github.com/material-components/material-components-web/issues/5242, overriding for now so menu items will take on the themed color */
.mdc-drawer .mdc-list-item--activated,
.mdc-drawer .mdc-list-item--activated .mdc-list-item__graphic {
  color: var(--mdc-theme-primary-variant, var(--mdc-theme-primary));
}
.mdc-list-item {
  margin: 4px 8px;
}
</style>

<svelte:window on:resize={showAppropriateDrawer}/>

<aside class="mdc-drawer {$$props.class}" class:mdc-drawer--modal={modal} class:mdc-drawer--dismissible={dismissible} bind:this={element}>
  {#if title || subtitle}
    <div class="mdc-drawer__header mt-1">
      <slot name="header"/>
    </div>
  {/if}

  <div class="mdc-drawer__content">
    <!-- override built-in padding so height 100 works correctly without creating a vertical scroller -->
    <!-- changing the list to flex causes the margins to not collapse -->
    <nav class="mdc-list flex column p-0" class:h-100={isFullHeightMenu} on:click={closeDrawer}>
      {#each menuItems as {icon, label, url, hide, button}, i}
        {#if label === '--break--'}
          <span class="grow-1" />
        {:else if !hide}
          {#if url && button}
           <Button class="m-1" raised prependIcon={typeof button == 'string' ? button : null} {url} >{label}</Button>
          {:else if url}
            <a class="mdc-list-item" class:mdc-list-item--activated={isMenuItemActive(currentUrl, url)} href={url}
              aria-current={isMenuItemActive(currentUrl, url) ? "page" : null} tabindex={i === 0 ? 0 : undefined}>
              <span class="mdc-list-item__ripple" />
              {#if icon}
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">{icon}</i>
              {/if}

              {#if label}
                <span class="mdc-list-item__text">{label}</span>
              {/if}
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

<div class="app-content relative">
  {#if hasTopAppBar}
    <TopAppBar dense fixed bgColorIsVariant on:nav={toggleDrawer} navIconBreakpointClass={!dismissible && "hide-above-tablet"} >
      <slot name="TopAppBar"/>
    </TopAppBar>
  {/if}

  <main class="h-100" class:classForContent>
    <div class:mdc-top-app-bar--dense-fixed-adjust={hasTopAppBar} class="h-100">
      <slot />
    </div>
  </main>
</div>