<script>
  export let color = 'gray'
  export let borderRadius = '50%'
  export let padding = '.2em'
  export let bordered = false

  let transparentColor = ''

  $: if (color[0] == '#') {
    color.length == 7 && (transparentColor = color + '12')

    color.length == 4 && (transparentColor = color + color.slice(1) + '12')
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
    background: linear-gradient(0deg, var(--bg-color), var(--bg-color)), #FFF;
    border: 1px solid var(--theme-color);
    color: black;
  }
</style>

<span class="mdc-typography dib text-align-center white fs-16 {$$props.class}" class:bordered style="--theme-color: {color}; --bg-color: {transparentColor}; --border-radius: {borderRadius}; --padding: {padding}" >
  <slot />
</span>
