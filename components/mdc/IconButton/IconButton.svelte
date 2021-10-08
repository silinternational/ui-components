<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-button -->
<script>
import { MDCRipple } from '@material/ripple'
import { onMount } from 'svelte'

export let icon
export let ariaLabel

let element = {}
onMount(() => {
  const ripple = new MDCRipple(element)

  ripple.unbounded = true

  return () => ripple.destroy()
})
</script>

<button class="mdc-icon-button material-icons {$$props.class}" aria-label={ariaLabel} on:click bind:this={element}
  >{icon}</button
>
