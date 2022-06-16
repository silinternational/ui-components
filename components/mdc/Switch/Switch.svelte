<!--  https://github.com/material-components/material-components-web/tree/master/packages/mdc-switch -->
<script>
import { generateRandomID } from '../../../random'
import { MDCSwitch } from '@material/switch'
import { createEventDispatcher, onMount } from 'svelte'

/**
 * displayed right of the switch
 */
export let label = 'off/on'
/**
 * disables the switch
 */
export let disabled = false
/**
 * used to set the switch initial state
 */
export let selected = false

let element = {}
let switchControl = {}
let id = ''

onMount(() => {
  id = generateRandomID('switch-')
  switchControl = new MDCSwitch(element)
})

const dispatch = createEventDispatcher()

// Used setTimeout because switchControl.selected needs to be updated before dispatching the event
function onClick() {
  setTimeout(() => dispatch(switchControl.selected ? 'selected' : 'deselected'))
}
</script>

<!--
  @component
  Used to toggle an item on tablet and mobile devices or immediately activate/deactive something
  see https://silinternational.github.io/ui-components/?path=/docs/atoms-switch--primary for usage
-->

<button
  on:click={onClick}
  bind:this={element}
  {id}
  class="mdc-switch"
  class:mdc-switch--selected={selected}
  class:mdc-switch--unselected={!selected}
  type="button"
  role="switch"
  aria-checked={selected}
  {disabled}
>
  <div class="mdc-switch__track" />
  <div class="mdc-switch__handle-track">
    <div class="mdc-switch__handle">
      <div class="mdc-switch__shadow">
        <div class="mdc-elevation-overlay" />
      </div>
      <div class="mdc-switch__ripple" />
      <div class="mdc-switch__icons">
        <svg class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">
          <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
        </svg>
        <svg class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">
          <path d="M20 13H4v-2h16v2z" />
        </svg>
      </div>
    </div>
  </div>
  <span class="mdc-switch__focus-ring-wrapper">
    <div class="mdc-switch__focus-ring" />
  </span>
</button>
<label for={id}>{label}</label>
