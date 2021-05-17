<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar -->
<script>
import { MDCSnackbar } from '@material/snackbar'
import { notice } from './notice'
import { onMount } from 'svelte'

let element = {}
let mdcSnackbar = {}
let queue = []
let action
let clickHandler

$: $notice.label && addMessage($notice)

function addMessage(msg) {
  if (!mdcSnackbar.isOpen) {
    open(msg)
  } else {
    queue.push(msg)
  }
  notice.set({})
}

onMount(() => {
  mdcSnackbar = new MDCSnackbar(element)

  mdcSnackbar.listen('MDCSnackbar:closed', onClose)

  return () => mdcSnackbar.destroy()
})

function onClose() {
  if (queue.length) {
    const next = queue.shift()
    open(next)
  }
}

function open(msg) {
  mdcSnackbar.labelText = msg.label
  action = msg.action || 'dismiss'
  clickHandler = msg.callback || (() => {})

  mdcSnackbar.open && mdcSnackbar.open()
}
</script>

<div class="mdc-snackbar" bind:this={element}>
  <div class="mdc-snackbar__surface mdc-theme--secondary-variant">
    <div class="mdc-snackbar__label" role="status" aria-live="polite">
    </div>
    {#if action}
      <div class="mdc-snackbar__actions">
        <button type="button" class="mdc-button mdc-snackbar__action" on:click={clickHandler}>
          <div class="mdc-button__ripple"></div>
          <span class="mdc-button__label">{action}</span>
        </button>
      </div>
    {/if}
  </div>
</div>
