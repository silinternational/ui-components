<script>
import { createEventDispatcher, onMount } from 'svelte'

/** @type {boolean} if the checkbox is disabled or not */
export let disabled = false
/** @type {string} the row ID */
export let rowId = ''

onMount(() => dispatch('mounted'))

const dispatch = createEventDispatcher()
</script>

<td
  class="mdc-data-table__cell mdc-data-table__cell--checkbox {$$props.class || ''}"
  on:click
  on:keypress
  on:keyup
  on:keydown
>
  <div class="mdc-checkbox mdc-data-table__row-checkbox">
    <input type="checkbox" class="mdc-checkbox__native-control" aria-labelledby={rowId} {disabled} />
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
        <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
      </svg>
      <div class="mdc-checkbox__mixedmark" />
    </div>
    <div class="mdc-checkbox__ripple" />
  </div>
</td>
