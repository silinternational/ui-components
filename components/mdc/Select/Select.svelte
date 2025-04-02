<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-select -->
<script>
import { MDCSelect } from '@material/select'
import { generateRandomID } from '../../../random'
import { afterUpdate, createEventDispatcher, onMount } from 'svelte'

/** @type displayed with the mdc-floating-label class */
export let label = 'Select'

/** @type {string} The description to display below the select list. */
export let description = ''

/** @type {{id: string, name: string}[]} The options to be displayed in the select list. */
export let options = []
/** @type {string} The width of the select list. E.g. '280px' */
export let width = '280px'
/** @type {boolean} Disables the select list. */
export let disabled = false
/** @type {string} The ID of the selected option. */
export let selectedID = ''
/** @type {boolean} makes a selection required and adds invalid class when none selected */
export let required = false
/** @type {boolean} applies the mdc-select--invalid class */
export let showError = false
/** @type {string} a name for the hidden input field for form submission*/
export let name = ''

const dispatch = createEventDispatcher()
const labelID = generateRandomID('select-label-')
const selectedTextID = generateRandomID('select-selected-text-')

let element = {}
let mdcSelect = {}
let previousOptionsIDsCSV = ''

$: selectedIndex = options.findIndex((option) => option.id === selectedID)
$: dispatch('change', options[selectedIndex] || {})
$: mdcSelect.disabled = disabled
$: if (options && mdcSelect.layoutOptions) mdcSelect.layoutOptions()

const getIDsCSV = (options) => options.map((option) => option.id).join(',')

const optionsHaveChanged = (options) => previousOptionsIDsCSV !== getIDsCSV(options)

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

  // If options have been provided or changed, give the current processes time to finish
  // what they're doing, then indicate that this Select is now populated with
  // options. At this point, it's safe for the selectedID to be initialized.
  if (options.length > 0 && optionsHaveChanged(options)) {
    previousOptionsIDsCSV = getIDsCSV(options)
    setTimeout(() => {
      dispatch('populated')
    })
  }
})
</script>

<div
  class="mdc-select mdc-select--outlined {$$props.class || ''}"
  class:mdc-select--required={required}
  class:mdc-select--invalid={showError}
  bind:this={element}
  style="width: {width}"
>
  <input data-1p-ignore {required} type="hidden" {name} />
  <div
    class="mdc-select__anchor"
    aria-required={required}
    aria-haspopup="listbox"
    aria-labelledby="{labelID} {selectedTextID}"
  >
    <span class="mdc-notched-outline">
      <span class="mdc-notched-outline__leading" />
      <span class="mdc-notched-outline__notch">
        <span id={labelID} class="mdc-floating-label">{label}</span>
      </span>
      <span class="mdc-notched-outline__trailing" />
    </span>
    <span class="mdc-select__selected-text-container">
      <span id={selectedTextID} class="mdc-select__selected-text" />
    </span>
    <span class="mdc-select__dropdown-icon">
      <svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false">
        <polygon
          class="mdc-select__dropdown-icon-inactive"
          stroke="none"
          fill-rule="evenodd"
          points="7 10 12 15 17 10"
        />
        <polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15" />
      </svg>
    </span>
  </div>

  <div class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
    <ul class="mdc-deprecated-list" role="listbox" aria-label={label + ' picker listbox'}>
      {#each options as { id, name } (id)}
        <li class="mdc-deprecated-list-item" data-value={id} role="option" aria-selected={isOptionSelected(id)}>
          <span class="mdc-deprecated-list-item__text">{name}</span>
        </li>
      {/each}
    </ul>
  </div>
</div>
<div class="mdc-text-field-helper-line">
  <div
    class="mdc-text-field-helper-text
    mdc-text-field-helper-text--persistent"
    id="{labelID}-helper-id"
    aria-hidden="true"
  >
    {#if description}
      {description}
    {/if}
  </div>
</div>
