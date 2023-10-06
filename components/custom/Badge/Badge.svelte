<script>
/** @type {string} the background color of the badge. Defaults to "gray" */
export let color = 'gray'
/** @type {string} the border radius of the badge. Defaults to "50%" */
export let borderRadius = '50%'
/** @type {string} the padding of the badge. Defaults to ".2em" */
export let padding = '.2em'
/** @type {boolean} if the badge is bordered or not */
export let bordered = false

let transparentColor = ''

$: if (/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
  color.length == 7 && (transparentColor = color + '12')

  color.length == 4 &&
    (transparentColor =
      '#' + color.slice(1, 2).repeat(2) + color.slice(2, 3).repeat(2) + color.slice(3, 4).repeat(2) + '12')
}
</script>

<style>
span {
  min-width: 1.15em;
  min-height: 1.15em;
  padding: var(--padding);
  background-color: var(--theme-color);
  border-radius: var(--border-radius);
}

.bordered {
  background: linear-gradient(0deg, var(--bg-color), var(--bg-color)), #fff;
  border: 1px solid var(--theme-color);
  color: black;
}
</style>

<span
  class="mdc-typography dib text-align-center white fs-16 {$$props.class || ''}"
  class:bordered
  style="--theme-color: {color}; --bg-color: {transparentColor}; --border-radius: {borderRadius}; --padding: {padding}"
>
  <slot />
</span>
