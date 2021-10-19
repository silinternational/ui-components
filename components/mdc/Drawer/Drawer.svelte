<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer -->
<script>
import { isAboveTablet as isDesktop, isAboveMobile } from '../breakpoints'
import { MDCDrawer } from '@material/drawer'
import { MDCList } from '@material/list'
import Button from '../Button'
import IconButton from '../IconButton/IconButton.svelte'
import Tooltip from '../Tooltip/Tooltip.svelte'
import { beforeUrlChange, goto } from '@roxi/routify'
import { onMount } from 'svelte'
import TopAppBar from '../TopAppBar'

export let title = ''
export let subtitle = ''
export let menuItems = []
export let dismissible = false
export let hasTopAppBar = false
export let hideForTablet = false
export let hideForPhonesOnly = false
export let isFullHeightMenu = false
export let miniMenu = false
export let modal = false
export let toggle = false

let mdcDrawer = {}
let mdcList = {}
let element = {}
let listElement = {}
let mainContentEl = {}
let isNotMini

onMount(() => {
  if (modal || dismissible) {
    mdcDrawer = new MDCDrawer(element)

    //MDC docs: restores focus to first focusable element when drawer closes
    document.body.addEventListener('MDCDrawer:closed', () => mainContentEl.querySelector('input, button').focus())

    showAppropriateThings()

    return () => mdcDrawer.destroy()
  } else {
    mdcList = new MDCList(listElement)

    return () => mdcList.destroy()
  }
})

const isMenuItemActive = (currentUrl, menuItemUrl) => currentUrl === menuItemUrl

$: currentUrl = window.location.pathname
$: toggle, toggleDrawer()

$beforeUrlChange(({ url }) => {
  currentUrl = url

  return true
})

const showAppropriateThings = () => {
  showAppropriateDrawer()
  showAppropriateSizeMenu()
}

const showAppropriateDrawer = () => {
  if (hideForPhonesOnly) {
    isAboveMobile() && !dismissible ? showStandardDrawer() : showModalDrawer()
  } else if (hideForTablet) {
    isDesktop() && !dismissible ? showStandardDrawer() : showModalDrawer()
  }
}

const onListClick = (e) => {
  modal && closeDrawer()
  dismissible && mainContentEl.querySelector('input, button').focus()
}

const showAppropriateSizeMenu = () => (isNotMini = isAboveMobile() || !miniMenu)
const showModalDrawer = () => (modal = true)
const showStandardDrawer = () => (modal = false)
const closeDrawer = () => (mdcDrawer.open = false)
const toggleDrawer = () => (mdcDrawer.open = !mdcDrawer.open)
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

<svelte:window on:resize={showAppropriateThings} />

<aside
  class="mdc-drawer {$$props.class}"
  class:mdc-drawer--modal={modal}
  class:mdc-drawer--dismissible={dismissible}
  bind:this={element}
>
  {#if title || subtitle}
    <div class="mdc-drawer__header mt-1">
      <slot name="header" />
    </div>
  {/if}

  <div class="mdc-drawer__content">
    <slot name="drawer-content-top" />
    <!-- override built-in padding so height 100 works correctly without creating a vertical scroller -->
    <!-- changing the list to flex causes the margins to not collapse -->
    <nav class="mdc-list flex column p-0" class:h-100={isFullHeightMenu} on:click={onListClick} bind:this={listElement}>
      {#each menuItems as { icon, label, url, hide, button, tooltip }, i}
        {#if label === '--break--'}
          <span class="grow-1" />
        {:else if !hide}
          <Tooltip.Wrapper ariaDescribedBy={label + '-tooltip'}>
            {#if button && isNotMini}
              <Button class="m-1" raised prependIcon={icon} {url}>{label}</Button>
            {:else if button}
              <IconButton class="mdc-theme--primary pl-1" {icon} ariaLabel={label} on:click={() => $goto(url)} />
            {:else if url}
              <a
                class="mdc-list-item"
                class:mdc-list-item--activated={isMenuItemActive(currentUrl, url)}
                href={url}
                aria-current={isMenuItemActive(currentUrl, url) ? 'page' : null}
                tabindex={i === 0 ? 0 : undefined}
              >
                <span class="mdc-list-item__ripple" />
                {#if icon}
                  <i class="material-icons mdc-list-item__graphic" aria-hidden="true">{icon}</i>
                {/if}

                {#if label && isNotMini}
                  <span class="mdc-list-item__text">{label}</span>
                {/if}
              </a>
            {:else}
              <hr
                class="mdc-list-divider mdc-list-divider--inset-leading mdc-list-divider--inset-trailing"
                role="separator"
              />
            {/if}
          </Tooltip.Wrapper>
          {#if tooltip}
            <Tooltip tooltipID={label + '-tooltip'}>{tooltip}</Tooltip>
          {/if}
        {/if}
      {/each}
    </nav>
  </div>
</aside>

<div class="mdc-drawer-scrim" />

<div class="app-content relative">
  {#if hasTopAppBar}
    <TopAppBar
      dense
      fixed
      bgColorIsVariant
      on:nav={toggleDrawer}
      navIconBreakpointClass={!dismissible && 'hide-above-tablet'}
    >
      <slot name="TopAppBar" />
      <slot slot="actions" name="actions" />
    </TopAppBar>
  {/if}

  <main class="h-100" id="main-drawer-content" bind:this={mainContentEl}>
    <div class:mdc-top-app-bar--dense-fixed-adjust={hasTopAppBar} class="h-100">
      <slot />
    </div>
  </main>
</div>
