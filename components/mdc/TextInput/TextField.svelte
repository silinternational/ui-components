<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield -->
<script>
import { MDCTextField } from '@material/textfield'
import { generateRandomID } from '../../../random'
import { onMount } from 'svelte'

export let label = ''
export let value = ''
export let placeholder = ''
export let maxlength = undefined
export let autofocus = false
export let disabled = false
export let required = false
export let icon = ''

const labelID = generateRandomID('text-label-')

let element = {}
let mdcTextField = {}

$: mdcTextField.value = value
$: width = `${element.offsetWidth}px`
$: hasReachedMaxLength = maxlength && value.length >= maxlength
$: error = hasReachedMaxLength
$: showCounter = maxlength && value.length / maxlength > 0.85

onMount(() => {
  mdcTextField = new MDCTextField(element)
  return () => mdcTextField.destroy()
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
.required {
  color: var(--mdc-required-input, var(--mdc-theme-status-error));
  font-size: small;
  margin-left: 1rem;
  margin-top: 0.2rem;
}
.label-margin {
  margin-left: 1.1rem;
}
.mdc-text-field--label-floating .mdc-floating-label {
  margin-left: 0;
}
.mdc-text-field-helper-line {
  float: right;
  padding-right: 1rem;
}
.error {
  color: var(--mdc-theme-status-error, var(--mdc-theme-error));
}
</style>

<label
  class="mdc-text-field mdc-text-field--outlined {$$props.class} textfield-radius"
  class:mdc-text-field--no-label={!label}
  class:mdc-text-field--disabled={disabled}
  class:mdc-text-field--invalid={hasReachedMaxLength}
  bind:this={element}
>
  <i class="material-icons" aria-hidden="true">{icon}</i>
  <input
    type="text"
    class="mdc-text-field__input"
    aria-labelledby={labelID}
    bind:value
    use:focus
    on:blur
    on:keydown
    on:keypress
    on:keyup
    {required}
    {maxlength}
    {disabled}
    {placeholder}
  />
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
<div style="width: {width};">
  {#if required && !value}
    <div class="required d-inline">*Required</div>
  {/if}
  {#if showCounter}
    <div class="mdc-text-field-helper-line">
      <div class="mdc-text-field-character-counter" class:error>
        {value.length} / {maxlength}
      </div>
    </div>
  {/if}
</div>
