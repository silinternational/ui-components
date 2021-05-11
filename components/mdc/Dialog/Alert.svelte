<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-dialog -->
<script>
import { MDCDialog } from '@material/dialog'
import { createEventDispatcher, onMount } from 'svelte'

export let open = false
export let title = ''
export let defaultAction = 'discard'

/** @type {{label, action}[]} */
export let buttons = [
  {
    label: 'cancel', 
    action: 'cancel',
    class: 'mdc-dialog__button'
  },
  {
    label: 'discard', 
    action: 'discard',
    class: 'mdc-dialog__button'
  }
]

const dispatch = createEventDispatcher()

let element = {}
let mdcDialog = {}

$: open && mdcDialog.open && mdcDialog.open()

onMount(() => {
  mdcDialog = new MDCDialog(element)

  mdcDialog.listen('MDCDialog:closed', event => {
    const action = event.detail.action
    const choiceWasMade = action !== 'close' //TODO: design bug here if the consumer happened to send their own button with a 'close' action

    choiceWasMade && dispatch('chosen', action)
    dispatch('closed')
  })

  return () => mdcDialog.destroy()
})
</script>

<div class="mdc-dialog" bind:this={element}>
  <div class="mdc-dialog__container">
    <div class="mdc-dialog__surface"
         role="alertdialog"
         aria-modal="true"
         aria-labelledby="title"
         aria-describedby="content">
      {#if title}
        <h2 class="mdc-dialog__title" id="title">{title}</h2>
      {/if}
      <div class="mdc-dialog__content" id="content">
        <slot />
      </div>
      <div class="mdc-dialog__actions">
        {#each buttons as button, i}
          <button type="button" 
          class="mdc-button {button.class}"
          data-mdc-dialog-action={button.action}
                  tabindex={defaultAction !== button.action ? -1 : null}>
                  <!-- TODO: design bug here if the user only supplies one button and it's not a 'cancel' action -->
            <div class="mdc-button__ripple"></div>
            <span class="mdc-button__label">{button.label}</span>
          </button>
        {/each}
      </div>
    </div>
  </div>
<div class="mdc-dialog__scrim"></div>
</div>
