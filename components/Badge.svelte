<script>
  export let color = 'gray'
  export let borderRadius = '50%'
  export let padding = '.2em'
</script>

<style>
  span {
    min-width: 1.15em;
    min-height: 1.15em;
    padding: var(--padding);
    background-color: var(--theme-color);
    border-radius: var(--border-radius);
  }
</style>

<span class="mdc-typography dib text-align-center white fs-16 {$$props.class}" style="--theme-color: {color}; --border-radius: {borderRadius}; --padding: {padding}" ><slot /></span>
