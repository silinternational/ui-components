<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-list -->
<script>
import { MDCList } from '@material/list'
import { onMount } from 'svelte'

/** @type {boolean} if the list is two line or not */
export let twoLine = false
/** @type {boolean} if the list is avatar or not */
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
  class="mdc-deprecated-list {$$props.class || ''}"
  class:mdc-deprecated-list--two-line={twoLine}
  class:mdc-deprecated-list--avatar-list={avatar}
  bind:this={element}
>
  <slot />
</ul>
