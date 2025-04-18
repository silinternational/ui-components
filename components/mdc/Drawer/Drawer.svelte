<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer -->
<script>
import { isAboveTablet as isDesktop, isAboveMobile } from '../breakpoints'
import { MDCDrawer } from '@material/drawer'
import { MDCList } from '@material/list'
import Button from '../Button'
import IconButton from '../IconButton/IconButton.svelte'
import Tooltip from '../Tooltip/Tooltip.svelte'
import { onMount } from 'svelte'
import TopAppBar from '../TopAppBar'

/** @type {string} The title to be displayed in the drawer. */
export let title = ''
/** @type {string} The subtitle to be displayed in the drawer. */
export let subtitle = ''
/** @type {array} The menu items to be displayed in the drawer. */
export let menuItems = []
/** @type {boolean} Whether the drawer is dismissible or not. */
export let dismissible = false
/** @type {boolean} Whether the drawer has a top app bar or not. */
export let hasTopAppBar = false
/** @type {boolean} Whether the drawer should be hidden for tablet and above. */
export let hideForTablet = false
/** @type {boolean} Whether the drawer should be hidden for phones only. */
export let hideForPhonesOnly = false
/** @type {boolean} Whether the drawer menu should be full height or not. */
export let isFullHeightMenu = false
/** @type {boolean} Whether the drawer menu should be mini or not. */
export let miniMenu = false
/** @type {boolean} Whether the drawer should be modal or not. */
export let modal = false
/** @type {boolean} Whether the drawer should be open or not. */
export let toggle = false
/** @type {string} The current url of the page. */
export let currentUrl = ''

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
    element.addEventListener('MDCDrawer:closed', () => mainContentEl.querySelector('input, button').focus())

    showAppropriateThings()

    return () => mdcDrawer.destroy()
  } else {
    mdcList = new MDCList(listElement)

    return () => mdcList.destroy()
  }
})

const isMenuItemActive = (currentUrl, menuItemUrl, urlPattern) => {
  return currentUrl === menuItemUrl || (urlPattern && RegExp(urlPattern).test(currentUrl))
}

$: toggle, toggleDrawer()

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
  if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
    modal && closeDrawer()
    dismissible && mainContentEl.querySelector('input, button').focus()
  }
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
.mdc-drawer .mdc-deprecated-list-item--activated,
.mdc-drawer .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic {
  color: var(--mdc-theme-primary-variant, var(--mdc-theme-primary));
}
.mdc-deprecated-list-item {
  margin: 4px 8px;
}
.main-content-height {
  height: var(--mdc-drawer-height);
}
.drawer-menu {
  display: flex;
  flex-direction: column;
  padding: 0;
}
</style>

<svelte:window on:resize={showAppropriateThings} />

<aside
  class="mdc-drawer {$$props.class || ''}"
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
    <nav class:h-100={isFullHeightMenu} bind:this={listElement}>
      <div
        class="drawer-menu mdc-deprecated-list"
        role="button"
        tabindex="-1"
        on:click={onListClick}
        on:keyup={onListClick}
      >
        {#each menuItems as { icon, label, url, urlPattern, hide, button, tooltip }, i}
          {#if label === '--break--'}
            <span class="grow-1" />
          {:else if !hide}
            <Tooltip.Wrapper ariaDescribedBy={label + '-tooltip'}>
              {#if button && isNotMini}
                <Button class="m-1" raised prependIcon={icon} {url}>{label}</Button>
              {:else if button}
                <IconButton class="mdc-theme--primary pl-1" {icon} ariaLabel={label} {url} />
              {:else if url}
                <a
                  class="mdc-deprecated-list-item"
                  class:mdc-deprecated-list-item--activated={isMenuItemActive(currentUrl, url, urlPattern)}
                  href={url}
                  aria-current={isMenuItemActive(currentUrl, url, urlPattern) ? 'page' : null}
                  tabindex={i === 0 ? 0 : undefined}
                >
                  <span class="mdc-deprecated-list-item__ripple" />
                  {#if icon}
                    <i class="material-icons mdc-deprecated-list-item__graphic" aria-hidden="true">{icon}</i>
                  {/if}

                  {#if label && isNotMini}
                    <span class="mdc-deprecated-list-item__text">{label}</span>
                  {/if}
                </a>
              {:else}
                <hr
                  class="mdc-deprecated-list-divider mdc-deprecated-list-divider--inset-leading mdc-deprecated-list-divider--inset-trailing"
                />
              {/if}
            </Tooltip.Wrapper>
            {#if tooltip}
              <Tooltip tooltipID={label + '-tooltip'}>{tooltip}</Tooltip>
            {/if}
          {/if}
        {/each}
      </div>
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

  <main class="main-content-height" id="main-drawer-content" bind:this={mainContentEl}>
    <div class:mdc-top-app-bar--dense-fixed-adjust={hasTopAppBar} class="main-content-height">
      <slot />
    </div>
  </main>
</div>
