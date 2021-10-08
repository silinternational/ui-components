<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-menu -->
<script>
import { MDCMenu } from '@material/menu'
import { goto } from '@roxi/routify'
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
const handleItemClick = (url) => {
  if (url) {
    $goto(url)
  }
}
const handleItemKeydown = (e, url) => (e.code == 'Space' || e.code == 'Enter') && handleItemClick(url)
const closeMenuHandler = () => {
  if (!menu.open) {
    //checks to make sure the click wasn't opening the menu or on the menu
    menuOpen = false
  }
}
</script>

<!-- mdc-menu doesn't have a method to let us know when it closes so this listens for clicks -->
<svelte:body on:click={closeMenuHandler} />

<div class="mdc-menu mdc-menu-surface {$$props.class}" bind:this={element}>
  <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabindex="-1">
    {#each menuItems as { icon, label, url }, i}
      <!-- svelte-ignore a11y-invalid-attribute -->
      <li
        on:click|preventDefault={() => handleItemClick(url)}
        on:keydown|preventDefault={(e) => handleItemKeydown(e, url)}
        role="menuitem"
        class="mdc-list-item"
        class:mdc-list-item--activated={isMenuItemActive(currentUrl, url)}
        aria-current={isMenuItemActive(currentUrl, url) ? 'page' : null}
        tabindex={i === 0 ? 0 : undefined}
        on:blur={closeMenuHandler}
      >
        <span class="mdc-list-item__ripple" />
        {#if icon}
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true">{icon}</i>
        {/if}
        {#if label}
          <span class="mdc-list-item__text">{label}</span>
        {/if}
      </li>
    {/each}
  </ul>
</div>
