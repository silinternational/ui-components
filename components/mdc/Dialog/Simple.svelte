<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-dialog -->
<script>
import List from '../List'
import { MDCDialog } from '@material/dialog'
import { createEventDispatcher, onMount } from 'svelte'

export let open = false
export let title = 'Choose one'

/** @type {{id, name}[]} */
export let items = []

const dispatch = createEventDispatcher()

let element = {}
let mdcDialog = {}

$: open && mdcDialog.open && mdcDialog.open()

onMount(() => {
  mdcDialog = new MDCDialog(element)

  mdcDialog.listen('MDCDialog:closed', event => {
    const action = event.detail.action
    const choiceWasMade = action !== 'close'

    choiceWasMade && dispatch('chosen', fromAction(action))
  })

  return () => mdcDialog.destroy()
})

// data-mdc-dialog-action must be present and must be a string
const toAction = json => JSON.stringify(json)
const fromAction = s => JSON.parse(s)
</script>

<div class="mdc-dialog" bind:this={element}>
  <div class="mdc-dialog__container">
    <div class="mdc-dialog__surface {$$props.class}" role="alertdialog" aria-modal="true" aria-labelledby="dialog-title" aria-describedby="dialog-content">
      <!--(notes from docs) Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
      <h2 class="mdc-dialog__title" id="dialog-title">{title}</h2>
      
      <div class="mdc-dialog__content" id="dialog-content">
        <List avatar>
          {#each items as item, i (item.id)}
            <List.Item text={item.name} data-mdc-dialog-action={toAction(item)} tabindex={i === 0 ? 0 : undefined} />
          {/each}
        </List>
      </div>
    </div>
  </div>

  <div class="mdc-dialog__scrim"></div>
</div>