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
  class="mdc-deprecated-list {$$props.class}"
  class:mdc-deprecated-list--two-line={twoLine}
  class:mdc-deprecated-list--avatar-list={avatar}
  bind:this={element}
>
  <slot />
</ul>
