<svelte:options tag="sil-searchable-select" />

<script>
import { generateRandomID } from '../../../random'
import { createEventDispatcher } from 'svelte'

export let options = {}
export let choice = ''
export let placeholder = ''
export let padding = '12px'
export let width = '232px'
export let maxlength = 255
export let disabled = false

let element = {}

let randomId = generateRandomID('dataList-')

$: internalChoice = choice

const dispatch = createEventDispatcher()

const onChange = () => {
  options[internalChoice] && dispatch('chosen', options[internalChoice])
  choice = internalChoice
  element.blur()
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
  transition: top 0.3s ease, color 0.3s ease, font-size 0.3s ease;
}

.custom-field input:not(:placeholder-shown) + .placeholder,
.custom-field input:focus + .placeholder {
  top: 3px;
  font-size: 10px;
  color: #222;
}
</style>

<label class="custom-field" style="--field-padding: {padding}; {$$props.class}">
  <input
    autocomplete="off"
    {disabled}
    {maxlength}
    class="fs-14 {$$props.class}"
    style="width: {width}"
    list={randomId}
    placeholder="&nbsp;"
    bind:this={element}
    bind:value={internalChoice}
    on:change={onChange}
    on:blur={() => dispatch('check', internalChoice)}
    on:focus={() => (internalChoice = '')}
  />
  <span class="placeholder">{placeholder}</span>
</label>

<datalist id={randomId}>
  {#each Object.keys(options) as option}
    <option value={option} />
  {/each}
</datalist>
