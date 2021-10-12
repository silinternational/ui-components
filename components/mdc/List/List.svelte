<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-list -->
<script>
import { MDCList } from '@material/list'
import { onMount } from 'svelte'

export let twoLine = false
export let avatar = false

let element = {}
onMount(() => {
  const list = new MDCList(element)
  return () => list.destroy()
})
</script>

<style>
ul {
  width: 100%;
}
</style>

<ul
  class="mdc-list {$$props.class}"
  class:mdc-list--two-line={twoLine}
  class:mdc-list--avatar-list={avatar}
  bind:this={element}
>
  <slot />
</ul>
