<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield -->
<script>
import { MDCTextField } from '@material/textfield'
import { generateRandomID } from '../../../random'
import { afterUpdate, onMount } from 'svelte'

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
let width = ''

$: mdcTextField.value = value
$: hasReachedMaxLength = maxlength && value.length >= maxlength
$: error = hasReachedMaxLength
$: showCounter = maxlength && value.length / maxlength > 0.85

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
.required {
  color: var(--mdc-required-input, var(--mdc-theme-status-error));
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
  class:mdc-text-field--invalid={hasReachedMaxLength}
  bind:this={element}
>
  <i class="material-icons" aria-hidden="true">{icon}</i>
  <input
    type="text"
    class="mdc-text-field__input"
    aria-labelledby={labelID}
    aria-controls="{labelID}-helper-id"
    aria-describedby="{labelID}-helper-id"
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
  {#if hasReachedMaxLength}
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
  <div class="mdc-text-field-helper-text" id="{labelID}-helper-id" aria-hidden="true">
    {#if required && !value}
      <span class="required">*Required</span>
    {/if}
    {#if showCounter}
      <span class="error">Maximum {maxlength} characters</span>
    {/if}
  </div>
  {#if showCounter}
    <div class="mdc-text-field-character-counter" class:error>
      {value.length} / {maxlength}
    </div>
  {/if}
</div>
