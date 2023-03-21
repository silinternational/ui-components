<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield -->
<script>
import { getDecimalPlacesLength } from './helpers'
import { generateRandomID } from '../../../random'
import { MDCTextField } from '@material/textfield'
import { afterUpdate, onMount } from 'svelte'

export let label = ''
export let value = ''
export let step = '0.01'
export let placeholder = ''
export let name = ''
export let maxValue = undefined
export let minValue = undefined
export let autofocus = false
export let disabled = false
export let required = false
export let description = ''

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
$: internalValue = Number(value) || 0 //this causes problems with require input as 0 is a valid string

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
  class="mdc-text-field mdc-text-field--outlined {$$props.class} textfield-radius"
  class:mdc-text-field--no-label={!label}
  class:mdc-text-field--disabled={disabled}
  class:mdc-text-field--invalid={error}
  bind:this={element}
>
  <i class="material-icons" class:error aria-hidden="true">attach_money</i>
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
  <div class="mdc-text-field-helper-text" class:opacity1={required} id="{labelID}-helper-id" aria-hidden="true">
    {#if required && !internalValue}
      <span class="required" class:error={hasFocused}>*Required</span>
    {:else if hasExceededMaxValue}
      <span class="error">Maximum value allowed is {maxValue}</span>
    {:else if isLowerThanMinValue}
      <span class="error">Minimun value allowed is ({minValue})</span>
    {:else if valueNotDivisibleByStep}
      <span class="error">{internalValue} is not divisible by {step}</span>
    {:else if hasExceededMaxLength}
      <span class="error">Maximum {maxlength} characters</span>
    {/if}
  </div>
  {#if showCounter}
    <div class="mdc-text-field-character-counter" class:error>
      {valueLength} / {maxlength}
    </div>
  {/if}
</div>
{#if description}
  <span class="d-block mdc-theme--neutral">{description}</span>
{/if}
