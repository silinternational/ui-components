<script>
import { generateRandomID } from '../../../random'
import { createEventDispatcher } from 'svelte'

/** @type {object} the options to choose from. The keys are displayed in the dropdown and the value is dispatched with the change event */
export let options = {}
/** @type {string} the currently selected option value */
export let choice = ''
/** @type {string} the placeholder text which is also used as a floating label */
export let placeholder = ''
/** @type {string} the padding around the input label */
export let padding = '12px'
/** @type {string} the width of the input */
export let width = '232px'
/** @type {number} the maximum length of the input */
export let maxlength = 255
/** @type {boolean} if the input is disabled or not */
export let disabled = false
/** @type {boolean} if the input is required or not */
export let required = false
/** @type {boolean} applies the showError using error themes*/
export let showError = false

let element = {}
let randomId = generateRandomID('dataList-')
let savedChoice = ''

const dispatch = createEventDispatcher()

const onChange = (e) => {
  const internalChoice = e.target.value
  options[internalChoice] && dispatch('chosen', options[internalChoice])
  choice = internalChoice
  element.blur()
}

const clearChoice = () => {
  savedChoice = choice
  choice = ''
}

const onBlur = () => {
  if (savedChoice && !choice) {
    choice = savedChoice
  }
  dispatch('check', choice)
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.custom-field {
  font-size: 14px;
  position: relative;
  border-top: 20px solid transparent;
}

.custom-field input {
  border-radius: 8px;
  border: 1px solid gray;
  padding: var(--field-padding) 0 var(--field-padding) var(--field-padding);
}

.custom-field .placeholder {
  position: absolute;
  bottom: -52px;
  top: 23px;
  transform: translateY(-50%);
  color: #aaa;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  left: var(--field-padding);
  width: calc(100% - (var(--field-padding) * 2));
  transition:
    top 0.3s ease,
    color 0.3s ease,
    font-size 0.3s ease;
}

.custom-field input:not(:placeholder-shown) + .placeholder,
.custom-field input:focus + .placeholder {
  top: 3px;
  font-size: 10px;
  color: #222;
}
.showError {
  border-color: var(--mdc-theme-status-error, var(--mdc-theme-error));
  color: var(--mdc-theme-status-error, var(--mdc-theme-error));
}

.clear-button {
  cursor: pointer;
  padding: 5px;
  position: relative;
  right: 50px;
  border-radius: 4px;
  border: none;
  background-color: transparent;
}
</style>

<label class="custom-field" style="--field-padding: {padding}; {$$props.class || ''}">
  <input
    autocomplete="off"
    data-1p-ignore
    {disabled}
    {maxlength}
    class="fs-14 {$$props.class || ''}"
    class:showError
    style="width: {width}"
    {required}
    list={randomId}
    placeholder="&nbsp;"
    bind:this={element}
    value={choice}
    on:change={onChange}
    on:change
    on:blur={onBlur}
    on:blur
    on:focus
  />
  <span class="placeholder">{placeholder}</span>
  {#if choice}
    <button type="button" class="clear-button" on:click={clearChoice} aria-label="Clear selection">✕</button>
  {/if}
</label>

<datalist id={randomId}>
  {#each Object.keys(options) as option}
    <option value={option} />
  {/each}
</datalist>
