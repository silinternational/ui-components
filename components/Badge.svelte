<script>
  export let color
</script>

<style>
  span {
    background-color: gray;
    min-width: 1.15em;
    min-height: 1.15em;
    padding: .2em;
  }
</style>

<span class="dib align-center white fs-16 br-50" class:blue={color === 'blue'} class:green={color === 'green'} class:skyblue={color === 'skyblue'}><slot /></span>
