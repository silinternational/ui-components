<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-checkbox -->
<script>
import { MDCFormField } from '@material/form-field'
import { MDCCheckbox } from '@material/checkbox'
import { generateRandomID } from '../../../random'
import { createEventDispatcher, onMount } from 'svelte'

const dispatch = createEventDispatcher()

/** @type {string} the label text*/
export let label = ''
/** @type {boolean} if the checkbox is checked or not */
export let checked = false
/** @type {boolean} if the checkbox is disabled or not */
export let disabled = false
/** @type {boolean} if the label should be uppercase or not */
export let uppercase = false

let checkboxElement = {}
let formFieldElement = {}
let checkbox

const inputID = generateRandomID('checkbox-')

$: if (checkbox) checkbox.checked = checked

onMount(() => {
  checkbox = new MDCCheckbox(checkboxElement)
  const formField = new MDCFormField(formFieldElement)

  formField.input = checkbox
})

const handleChange = () => dispatch(checkbox.checked ? 'checked' : 'unchecked')
</script>

<div class="mdc-form-field {$$props.class || ''}" bind:this={formFieldElement}>
  <div class="mdc-checkbox" bind:this={checkboxElement}>
    <input type="checkbox" {disabled} on:change={handleChange} class="mdc-checkbox__native-control" id={inputID} />
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
        <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
      </svg>
      <div class="mdc-checkbox__mixedmark" />
    </div>
    <div class="mdc-checkbox__ripple" />
  </div>
  <label class:uppercase for={inputID}>{label}</label>
</div>
