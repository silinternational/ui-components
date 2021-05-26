<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-fab -->
<script>
import { MDCRipple } from '@material/ripple'
import { goto } from '@roxi/routify'
import { onMount } from 'svelte'

export let icon = 'add'
export let label
export let url

let element = {}

onMount(() => {
  const ripple = new MDCRipple(element)
  return () => ripple.destroy()
})
</script>

<style>
.mdc-fab {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}
</style>

<a class="mdc-fab {$$props.class}" aria-label={label} bind:this={element} href={url}>
  <div class="mdc-fab__ripple"></div>
  <span class="mdc-fab__icon material-icons">{icon}</span>
</a>
