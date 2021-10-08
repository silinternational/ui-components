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

const labelID = generateRandomID('text-label-')

let element = {}
let mdcTextField = {}

$: mdcTextField.value = value

onMount(() => {
  mdcTextField = new MDCTextField(element)
  return () => mdcTextField.destroy()
})

const focus = node => autofocus && node.focus()
</script>

<label class="mdc-text-field mdc-text-field--outlined {$$props.class} textfield-radius"
       class:mdc-text-field--no-label={!label}
       class:mdc-text-field--disabled={disabled}
       bind:this={element}>
  <input type="text" class="mdc-text-field__input" aria-labelledby={labelID} bind:value use:focus on:blur {maxlength} {disabled} {placeholder}>
  <span class="mdc-notched-outline">
    <span class="mdc-notched-outline__leading"></span>
    {#if label}
      <span class="mdc-notched-outline__notch">
        <span class="mdc-floating-label" id={labelID}>{label}</span>
      </span>
    {/if}
    <span class="mdc-notched-outline__trailing"></span>
  </span>
</label>
