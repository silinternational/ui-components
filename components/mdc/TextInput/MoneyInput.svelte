<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield -->
<script>
import { MDCTextField } from '@material/textfield'
import { generateRandomID } from '../../../random'
import { afterUpdate, onMount } from 'svelte'

export let label = ''
export let value = ''
export let step = '0.01'
export let placeholder = ''
export let maxValue = undefined
export let minValue = undefined
export let autofocus = false
export let disabled = false
export let required = false

const labelID = generateRandomID('text-label-')

let maxlength = 524288 /* default */
let element = {}
let mdcTextField = {}
let width = ''
let hasFocused = false

$: mdcTextField.value = value
$: valueLength = value?.toString()?.length
$: hasExceededMaxLength = maxlength && valueLength > maxlength
$: hasExceededMaxValue = maxValue && internalValue > maxValue
$: isLowerThanMinValue = minValue && internalValue < minValue
$: showErrorIcon = hasExceededMaxValue || isLowerThanMinValue || hasExceededMaxLength || valueNotDivisibleByStep
$: error = showErrorIcon || (hasFocused && required && !internalValue)
$: showCounter = maxlength && valueLength / maxlength > 0.85
$: valueNotDivisibleByStep = internalValue && (internalValue / Number(step)) % 1 !== 0
$: internalValue = Number(value) || ''

onMount(() => {
  mdcTextField = new MDCTextField(element)
  return () => mdcTextField.destroy()
})

afterUpdate(() => (width = `${element.offsetWidth}px`))

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
    bind:value={internalValue}
    use:focus
    on:focus={() => (hasFocused = true)}
    on:blur
    on:keydown
    on:keypress
    on:keyup
    {required}
    {maxlength}
    {disabled}
    {placeholder}
  />
  {#if showErrorIcon}
    <span class="mdc-text-field__affix mdc-text-field__affix--suffix"
      ><i class="material-icons error" aria-hidden="true">error</i></span
    >
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
