<script>
/**
 * @component DateInput
 * @description Date input with custom styling
 */

/**
 * @prop {string}
 * @description sets color of input text
 */
export let color = 'black'

/**
 * @prop {string}
 * @description sets color of input border
 */
export let borderColor = 'black'

/**
 * @prop {string}
 * @description sets color of input text after blur when required and empty
 */
export let errorColor = 'red'

/**
 * @prop {string}
 * @description sets padding of input
 */
export let padding = '12px'

/**
 * @prop {string}
 * @description sets width of input
 */
export let width = '220px'

/**
 * @prop {string}
 * @description sets font size input text
 */
export let fontSize = '14px'

/**
 * @prop {string} date in locale with no time data
 * @description sets initial date of input
 */
export let value = ''

/**
 * @prop {boolean}
 * @description sets whether input is disabled
 */
export let disabled = false

/**
 * @prop {boolean}
 * @description sets whether input is focused on load
 */
export let autofocus = false

/**
 * @prop {boolean}
 * @description sets whether input is required and has error color when empty after blur
 */
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

<label class="{$$props.class} custom-field">
  <input
    type="date"
    {required}
    {disabled}
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
