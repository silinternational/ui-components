<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-tab-scroller -->
<script>
import { MDCTabScroller } from '@material/tab-scroller'
import { onMount } from 'svelte'

let element = {}

onMount(() => {
  const scroller = new MDCTabScroller(element)
  return () => scroller.destroy()
})

</script>

<div class="mdc-tab-scroller" bind:this={element}>
  <div class="mdc-tab-scroller__scroll-area">
    <div class="mdc-tab-scroller__scroll-content">
      <slot />
    </div>
  </div>
</div>
