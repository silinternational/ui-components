<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield -->
<script>
import { addOrRemoveInvalidClass } from './helpers'
import { MDCTextField } from '@material/textfield'
import { generateRandomID } from '../../../random'
import { onMount, tick } from 'svelte'

/** @type {string} The label for the text input field. */
export let label = ''
/** @type {string} The value of the text input field. */
export let value = ' ' // whitespace is needed here, see comment below
/** @type {string} The placeholder for the text input field. */
export let placeholder = ''
/** @type {number} The number of rows to display in the textarea. */
export let rows = 8
/** @type {number} The maximum number of characters allowed in the text input field. */
export let maxlength = undefined
/** @type {boolean} If true, the text input field will be focused on mount. */
export let autofocus = false
/** @type {boolean}  If true, the text input field will be right to left, otherwise left to right. */
export let rtl = false
/** @type {boolean} If true, the text input field will be required. */
export let required = false
/** @type {string} The description to display below the text input field. */
export let description = ''
/** @type {string} The name of the textarea field. */
export let name = ''

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
</style>

<label
  class="mdc-text-field mdc-text-field--outlined mdc-text-field--textarea {$$props.class || ''} textfield-radius"
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
    {maxlength}
    {name}
    {required}
    {placeholder}
    bind:value
    use:focus
    bind:this={textarea}
    style="height:{height}px"
    on:input={resize}
    on:input
    on:keydown
    on:focus
    on:focus={() => (hasFocused = true)}
    on:blur
    on:blur={() => (hasBlurred = true)}
  />
  {#if maxlength}
    <span class="mdc-text-field-character-counter" class:error>{value.length} / {maxlength}</span>
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
