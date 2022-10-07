<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield -->
<svelte:options tag="sil-text-area" />

<script>
import { addOrRemoveInvalidClass } from './helpers'
import { MDCTextField } from '@material/textfield'
import { generateRandomID } from '../../../random'
import { onMount, tick } from 'svelte'

export let label = ''
export let value = ' ' // whitespace is needed here, see comment below
export let placeholder = ''
export let rows = 8
export let maxlength = undefined
export let autofocus = false
export let rtl = false
export let required = false
export let description = ''

const labelID = generateRandomID('textarea-label-')

let element = {}
let textarea = {}
let height = ''
let hasFocused = false
let hasBlurred = false

$: hasExceededMaxLength = maxlength && value.length > maxlength
$: error = hasExceededMaxLength || (hasFocused && hasBlurred && required && valueIsEmpty)
$: valueIsEmpty = value === ' ' || !value
$: !valueIsEmpty && addOrRemoveInvalidClass(error, element)

onMount(() => {
  resize()

  const mdcTextField = new MDCTextField(element)

  // set value back to empty string -- this is a workaround for the MDC component not
  // floating the label into the outline cutout when the value comes from the consumer
  value = value.trim()

  return () => mdcTextField.destroy()
})

const resize = () => {
  const typographyLineHeightInPx = 1.5 * 16
  const maxHeight = rows * 2 * typographyLineHeightInPx

  height = Math.min(maxHeight, textarea.scrollHeight)
}

const focus = async (node) => {
  if (autofocus) {
    await tick()

    node.focus()
  }
}
</script>

<style>
label {
  width: 100%;
}
.counter {
  position: absolute;
  bottom: 0;
  right: 0;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
  font-size: var(--mdc-typography-caption-font-size, 0.75rem);
  font-weight: var(--mdc-typography-caption-font-weight, 400);
}
</style>

<label
  class="mdc-text-field mdc-text-field--outlined mdc-text-field--textarea {$$props.class} textfield-radius"
  class:mdc-text-field--no-label={!label}
  class:mdc-text-field--label-floating={label}
  class:mdc-text-field--with-internal-counter={maxlength}
  bind:this={element}
>
  <textarea
    class="mdc-text-field__input"
    class:rtl
    aria-labelledby={labelID}
    aria-controls="{labelID}-helper-id"
    aria-describedby="{labelID}-helper-id"
    {rows}
    maxlength="524288"
    {required}
    {placeholder}
    bind:value
    use:focus
    bind:this={textarea}
    style="height:{height}px"
    on:input={resize}
    on:keydown
    on:focus
    on:focus={() => (hasFocused = true)}
    on:blur
    on:blur={() => (hasBlurred = true)}
  />
  {#if maxlength}
    <span class="counter gray mr-1 mb-4px" class:error>{value.length} / {maxlength}</span>
  {/if}
  <span class="mdc-notched-outline">
    <span class="mdc-notched-outline__leading" />

    {#if label}
      <span class="mdc-notched-outline__notch">
        <span class="mdc-floating-label" class:error id={labelID}>
          {label}
        </span>
      </span>
    {/if}

    <span class="mdc-notched-outline__trailing" />
  </span>
</label>
<div class="mdc-text-field-helper-line">
  <div class="mdc-text-field-helper-text" class:opacity1={required} id="{labelID}-helper-id" aria-hidden="true">
    {#if required && valueIsEmpty}
      <span class="required" class:error={hasFocused}>*Required</span>
    {:else if hasExceededMaxLength}
      <span class="error">Maximum {maxlength} characters</span>
    {/if}
  </div>
</div>
{#if description}
  <span class="d-block mdc-theme--neutral">{description}</span>
{/if}
