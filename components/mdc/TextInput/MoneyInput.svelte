<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield -->
<script>
/** A Svelte component that represents a text input for money values. */
import { addOrRemoveInvalidClass, getDecimalPlacesLength } from './helpers'
import { generateRandomID } from '../../../random'
import { MDCTextField } from '@material/textfield'
import { afterUpdate, onMount } from 'svelte'

/** @type {string} The label for the input. */
export let label = ''
/** @type {string} The value of the input. */
export let value = ''
/** @type {string} The step value for the input. */
export let step = '0.01'
/** @type {string} The placeholder for the input. */
export let placeholder = ''
/** @type {string} The name of the input. */
export let name = ''
/** @type {number} The maximum value allowed for the input. */
export let maxValue = undefined
/** @type {number} The minimum value allowed for the input. */
export let minValue = undefined
/** @type {boolean} If true, the input will be focused on mount. */
export let autofocus = false
/** @type {boolean} If true, the input will be disabled. */
export let disabled = false
/** @type {boolean} If true, the input will be required. */
export let required = false
/** @type {string} The description to display below the input. */
export let description = ''
/** @type {boolean} lets the component know to use error class. */
export let showError = false
/** @type {boolean} lets the component know to use warn class. */
export let showWarn = false

const labelID = generateRandomID('text-label-')

let maxlength = 524288 /* default */
let element = {}
let mdcTextField = {}
let width = ''
let hasFocused = false
let hasBlurred = false

$: valueLength = value?.toString()?.length
$: hasExceededMaxLength = maxlength && valueLength > maxlength
$: hasExceededMaxValue = maxValue && internalValue > maxValue
$: isLowerThanMinValue = minValue && internalValue < minValue
$: showErrorIcon = hasExceededMaxValue || isLowerThanMinValue || hasExceededMaxLength || valueNotDivisibleByStep
$: error = showErrorIcon || (hasFocused && hasBlurred && required && !internalValue)
$: showCounter = maxlength && valueLength / maxlength > 0.85
$: valueHasTooManyDecPlaces = getDecimalPlacesLength(internalValue) > getDecimalPlacesLength(step)
$: valueNotDivisibleByStep =
  (internalValue && (internalValue / Number(step)).toFixed(2) % 1 !== 0) || valueHasTooManyDecPlaces
$: internalValue = Number(value) || 0
$: warn = showWarn
$: addOrRemoveInvalidClass(showError || showWarn, element)

onMount(() => {
  mdcTextField = new MDCTextField(element)
  return () => mdcTextField.destroy()
})

afterUpdate(() => (width = `${element?.offsetWidth}px`))

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
  class:mdc-text-field--invalid={error}
  class:warn
  class:showError
  bind:this={element}
>
  <i class="material-icons mdc-text-field__icon--leading" class:error aria-hidden="true">attach_money</i>
  <input
    {step}
    type="number"
    min={minValue}
    max={maxValue}
    class="mdc-text-field__input"
    aria-labelledby={labelID}
    aria-controls="{labelID}-helper-id"
    aria-describedby="{labelID}-helper-id"
    bind:value
    use:focus
    on:focus={() => (hasFocused = true)}
    on:blur
    on:blur={() => (hasBlurred = true)}
    on:keydown
    on:keypress
    on:keyup
    {disabled}
    {maxlength}
    {name}
    {placeholder}
    {required}
  />
  {#if showErrorIcon}
    <span class="mdc-text-field__affix mdc-text-field__affix--suffix">
      <i class="material-icons error" aria-hidden="true"> error</i>
    </span>
  {/if}
  <span class="mdc-notched-outline">
    <span class="mdc-notched-outline__leading" />
    {#if label}
      <span class="mdc-notched-outline__notch">
        <span class="mdc-floating-label label-margin" class:error id={labelID}>
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
    {:else if required && !internalValue}
      ✴Required
    {:else if hasExceededMaxValue}
      Maximum value allowed is {maxValue}
    {:else if isLowerThanMinValue}
      Minimun value allowed is ({minValue})
    {:else if valueNotDivisibleByStep}
      {internalValue} is not divisible by {step}
    {:else if hasExceededMaxLength}
      Maximum {maxlength} characters
    {/if}
  </div>
  {#if showCounter}
    <div class="mdc-text-field-character-counter" class:error>
      {valueLength} / {maxlength}
    </div>
  {/if}
</div>
