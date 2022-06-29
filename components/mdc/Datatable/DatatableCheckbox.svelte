<script>
import { generateRandomID } from '../../../random'
import { createEventDispatcher } from 'svelte'

export let disabled = false

let checked = false

const inputID = generateRandomID('checkbox-')

$: checked, handleChange()

const dispatch = createEventDispatcher()

const handleChange = () => {
  dispatch('change')
}
</script>

<td class="mdc-data-table__cell mdc-data-table__cell--checkbox" on:click>
  <div class="mdc-checkbox mdc-data-table__row-checkbox">
    <input type="checkbox" class="mdc-checkbox__native-control" aria-labelledby={inputID} {disabled} bind:checked />
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
        <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
      </svg>
      <div class="mdc-checkbox__mixedmark" />
    </div>
    <div class="mdc-checkbox__ripple" />
  </div>
</td>
