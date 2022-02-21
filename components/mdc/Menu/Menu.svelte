<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-menu -->
<script>
import { MDCMenu } from '@material/menu'
import { onMount } from 'svelte'

export let menuItems = []
export let menuOpen = false

let menu = {}
let element = {}

$: currentUrl = window.location.pathname
$: menu.open = menuOpen

onMount(() => {
  menu = new MDCMenu(element)

  menu.setDefaultFocusState() //TODO figure out how to use this method and set focus

  return () => menu.destroy()
})

const isMenuItemActive = (currentUrl, menuItemUrl) => currentUrl === menuItemUrl
const handleItemClick = (action) => {
  if (typeof action === 'function') {
    action()
  }
}
const handleItemKeydown = (e, action) => (e.code == 'Space' || e.code == 'Enter') && handleItemClick(action)
const closeMenuHandler = () => {
  if (!menu.open) {
    //checks to make sure the click wasn't opening the menu or on the menu
    menuOpen = false
  }
}
</script>

<style>
.mdc-list-item__subtitle {
  color: var(--mdc-list-item__subtitle, var(#5f6368));
}
i {
  color: var(--mdc-menu-icon-color, var(#5f6368));
}
</style>

<!-- mdc-menu doesn't have a method to let us know when it closes so this listens for clicks -->
<svelte:body on:click={closeMenuHandler} />
<div id="toolbar" class="toolbar mdc-menu-surface--anchor">
  <div class="mdc-menu mdc-menu-surface {$$props.class}" bind:this={element}>
    <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabindex="-1">
      {#each menuItems as { icon, label, url, subtitle, action }, i}
        <!-- svelte-ignore a11y-invalid-attribute -->
        {#if subtitle}
          <li class="mdc-list-item" role="separator">
            <span class="mdc-list-item__subtitle">{subtitle}</span>
          </li>
        {:else if url}
          <a
            href={url}
            role="menuitem"
            class="mdc-list-item"
            class:mdc-list-item--activated={isMenuItemActive(currentUrl, url)}
            aria-current={isMenuItemActive(currentUrl, url) ? 'page' : null}
            tabindex={i === 0 ? 0 : undefined}
            on:blur={closeMenuHandler}
          >
            <span class="mdc-list-item__ripple" />
            {#if icon}
              <span class="mdc-list-item__graphic mdc-menu__selection-group-icon">
                <i class="material-icons" aria-hidden="true">{icon}</i>
              </span>
            {/if}
            {#if label}
              <span class="mdc-list-item__text">{label}</span>
            {/if}
          </a>
        {:else}
          <li
            on:click|preventDefault={() => handleItemClick(action)}
            on:keydown|preventDefault={(e) => handleItemKeydown(e, action)}
            role="menuitem"
            class="mdc-list-item"
            tabindex={i === 0 ? 0 : undefined}
            on:blur={closeMenuHandler}
          >
            <span class="mdc-list-item__ripple" />
            {#if icon}
              <span class="mdc-list-item__graphic mdc-menu__selection-group-icon">
                <i class="material-icons" aria-hidden="true">{icon}</i>
              </span>
            {/if}
            {#if label}
              <span class="mdc-list-item__text">{label}</span>
            {/if}
          </li>
        {/if}
      {/each}
    </ul>
  </div>
</div>
