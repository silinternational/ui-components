<script>
/** @type {string} sets color of input text */
export let color = 'black'
/** @type {string} sets color of input border */
export let borderColor = 'black'
/** @type {string} sets color of input text after blur when required and empty */
export let errorColor = 'red'
/** @type {string} sets padding of input */
export let padding = '12px'
/** @type {string} sets width of input */
export let width = '220px'
/** @type {string} sets font size input text */
export let fontSize = '14px'
/** @type {string} sets name of input */
export let name = ''
/** @type {string} sets initial date of input in locale with no time data */
export let value = ''
/** @type {boolean} sets whether input is disabled */
export let disabled = false
/** @type {boolean} sets whether input is focused on load */
export let autofocus = false
/** @type {boolean} sets whether input is required and has error color when empty after blur */
export let required = false

const onBlur = (e) => {
  if (required && !e.target.value) {
    e.target.style.color = errorColor
    e.target.style.borderColor = errorColor
  }
}

const onInput = (e) => {
  if (required && e.target.value) {
    e.target.style.color = color
    e.target.style.borderColor = borderColor
  }
}

const focus = (node) => autofocus && node.focus()
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.custom-field {
  font-size: 14px;
  position: relative;
  border-top: 20px solid transparent;
}

.custom-field input {
  border-radius: 8px;
  border: 1px solid var(--border-color);
  font-family: var(--mdc-typography-font-family);
}
</style>

<label class="{$$props.class || ''} custom-field">
  <input
    data-1p-ignore
    type="date"
    {required}
    {disabled}
    {name}
    bind:value
    on:blur={onBlur}
    on:input={onInput}
    use:focus
    style:color
    style:padding
    style:width
    style:font-size={fontSize}
    style:--border-color={borderColor}
  />
</label>
