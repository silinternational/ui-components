<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield -->
<script>
import { addOrRemoveInvalidClass } from './helpers'
import { MDCTextField } from '@material/textfield'
import { generateRandomID } from '../../../random'
import { afterUpdate, onMount } from 'svelte'

/**@type {string} The label for the text input field. */
export let label = ''
/** @type {string} The value of the text input field. */
export let value = ''
/** @type {string} The placeholder for the text input field. */
export let placeholder = ''
/** @type {number} The maximum number of characters allowed in the text input field. */
export let maxlength = undefined
/** @type {boolean} If true, the text input field will be focused on mount. */
export let autofocus = false
/** @type {boolean} If true, the text input field will be disabled. */
export let disabled = false
/** @type {boolean} If true, the text input field will be required. */
export let required = false
/** @type {string} The icon to display in the text input field. */
export let icon = ''
/** @type {string} The description to display below the text input field. */
export let description = ''
/** @type {string} The name of the text input field. */
export let name = ''

const labelID = generateRandomID('text-label-')

let element = {}
let mdcTextField = {}
let width = ''
let hasFocused = false
let hasBlurred = false

$: mdcTextField.value = value
$: hasExceededMaxLength = maxlength && value.length > maxlength
$: error = hasExceededMaxLength || (hasFocused && hasBlurred && required && !value)
$: showCounter = maxlength && value.length / maxlength > 0.85
$: value && addOrRemoveInvalidClass(error, element)

onMount(() => {
  mdcTextField = new MDCTextField(element)
  return () => mdcTextField.destroy()
})

afterUpdate(() => {
  width = `${element?.offsetWidth}px`
})

const focus = (node) => autofocus && node.focus()
</script>

<style>
.material-icons {
  color: rgb(133, 140, 148);
  position: relative;
  top: 0.4rem;
  right: 0.6rem;
}
.label-margin {
  margin-left: 1.1rem;
}
.mdc-text-field--label-floating .mdc-floating-label {
  margin-left: 0;
}
</style>

<label
  class="mdc-text-field mdc-text-field--outlined {$$props.class || ''} textfield-radius"
  class:mdc-text-field--no-label={!label}
  class:mdc-text-field--disabled={disabled}
  bind:this={element}
>
  <i class="material-icons" class:error aria-hidden="true">{icon}</i>
  <input
    type="text"
    class="mdc-text-field__input"
    aria-labelledby={labelID}
    aria-controls="{labelID}-helper-id"
    aria-describedby="{labelID}-helper-id"
    bind:value
    use:focus
    on:focus={() => (hasFocused = true)}
    on:blur={() => (hasBlurred = true)}
    on:blur
    on:keydown
    on:keypress
    on:keyup
    on:input
    {name}
    {required}
    {disabled}
    maxlength="524288"
    {placeholder}
  />
  {#if hasExceededMaxLength}
    <span class="mdc-text-field__affix mdc-text-field__affix--suffix"
      ><i class="material-icons error" aria-hidden="true">error</i></span
    >
  {/if}

  <span class="mdc-notched-outline">
    <span class="mdc-notched-outline__leading" />
    {#if label}
      <span class="mdc-notched-outline__notch">
        <span class="mdc-floating-label" class:label-margin={icon} class:error id={labelID}>
          {label}
        </span>
      </span>
    {/if}
    <span class="mdc-notched-outline__trailing" />
  </span>
</label>
<div class="mdc-text-field-helper-line" style="width: {width};">
  <div
    class="mdc-text-field-helper-text
    mdc-text-field-helper-text--{error ? 'validation-msg' : 'persistent'}"
    id="{labelID}-helper-id"
    aria-hidden="true"
  >
    {#if !error && description}
      {description}
    {:else if required && !value}
      ✴Required
    {:else if hasExceededMaxLength}
      Maximum {maxlength} characters
    {/if}
  </div>

  {#if showCounter}
    <div class="mdc-text-field-character-counter" class:error>
      {value.length} / {maxlength}
    </div>
  {/if}
</div>
