<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield -->
<script>
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

const labelID = generateRandomID('textarea-label-')

let element = {}
let textarea = {}
let height = ''

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

const focus = async node => {
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

<label class="mdc-text-field mdc-text-field--outlined mdc-text-field--textarea {$$props.class} textfield-radius"
       class:mdc-text-field--no-label={!label}
       class:mdc-text-field--label-floating={label}
       class:mdc-text-field--with-internal-counter={maxlength}
       bind:this={element}>

  <textarea class="mdc-text-field__input" class:rtl aria-labelledby={labelID} {rows} {maxlength} {placeholder}
            bind:value use:focus bind:this={textarea} style="height:{height}px" on:input={resize} on:keydown on:focus on:blur />
  {#if maxlength}
    <span class="mdc-text-field-character-counter">0 / {maxlength}</span>
  {/if}
  <span class="mdc-notched-outline">
    <span class="mdc-notched-outline__leading"></span>

    {#if label}
      <span class="mdc-notched-outline__notch">
        <span class="mdc-floating-label" id={labelID}>
          {label}
        </span>
      </span>
    {/if}

    <span class="mdc-notched-outline__trailing"></span>
  </span>
</label>
