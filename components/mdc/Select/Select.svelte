<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-select -->
<script>
import { MDCSelect } from '@material/select'
import { generateRandomID } from '../../../random'
import { afterUpdate, createEventDispatcher, onMount } from 'svelte'

export let label = 'Select'

/** @type {{id, name}[]} */
export let options = []
export let width = '280px'
export let disabled = false
export let selectedID = ''

const dispatch = createEventDispatcher()
const labelID = generateRandomID('select-label-')
const selectedTextID = generateRandomID('select-selected-text-')

let element = {}
let mdcSelect = {}

$: selectedIndex = options.findIndex((option) => option.id === selectedID)
$: dispatch('change', options[selectedIndex] || {})
$: mdcSelect.disabled = disabled
$: if (options && mdcSelect.layoutOptions) mdcSelect.layoutOptions()

const recordSelectedID = (event) => (selectedID = event.detail.value)

const isOptionSelected = (option) => option.id === selectedID

onMount(() => {
  mdcSelect = new MDCSelect(element)
  mdcSelect.listen('MDCSelect:change', recordSelectedID)
  mdcSelect.disabled = disabled
  return () => mdcSelect.destroy()
})

afterUpdate(() => {
  // As a reactive statement, this would execute before the DOM is updated with the new options list.
  // This makes sure the index is updated AFTER the select list contains the full list of options.
  mdcSelect.selectedIndex = selectedIndex

  // If options have been provided, give the current processes time to finish
  // what they're doing, then indicate that this Select is now populated with
  // options. At this point, it's safe for the selectedID to be initialized.
  if (options.length > 0) {
    setTimeout(() => {
      dispatch('populated')
    })
  }
})
</script>

<div class="mdc-select mdc-select--outlined {$$props.class}" bind:this={element} style="width: {width}">
  <div class="mdc-select__anchor" role="button" aria-haspopup="listbox" aria-labelledby="{labelID} {selectedTextID}">
    <span class="mdc-select__selected-text-container">
      <span id={selectedTextID} class="mdc-select__selected-text" />
    </span>
    <span class="mdc-select__dropdown-icon">
      <svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5">
        <polygon
          class="mdc-select__dropdown-icon-inactive"
          stroke="none"
          fill-rule="evenodd"
          points="7 10 12 15 17 10"
        />
        <polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15" />
      </svg>
    </span>
    <span class="mdc-notched-outline">
      <span class="mdc-notched-outline__leading" />
      <span class="mdc-notched-outline__notch">
        <span id={labelID} class="mdc-floating-label">{label}</span>
      </span>
      <span class="mdc-notched-outline__trailing" />
    </span>
  </div>

  <div class="mdc-select__menu mdc-menu mdc-menu-surface" style="width: {width}" role="listbox">
    <ul class="mdc-deprecated-list">
      {#each options as { id, name } (id)}
        <li class="mdc-deprecated-list-item" data-value={id} role="option" aria-selected={isOptionSelected(id)}>
          <span class="mdc-deprecated-list-item__text">{name}</span>
        </li>
      {/each}
    </ul>
  </div>
</div>
