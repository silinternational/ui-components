<script>
  export let color = 'gray'
</script>

<style>
  span {
    min-width: 1.15em;
    min-height: 1.15em;
    padding: .2em;
  }

  .background {
    background-color: var(--theme-color);
  }
</style>

<span class="dib text-align-center white fs-16 br-50 background {$$props.class}" style="--theme-color: {color}" ><slot /></span>
