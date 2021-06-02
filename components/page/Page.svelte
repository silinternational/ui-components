<script>
import { Progress } from '../mdc'
import appBarTitle from '../mdc/TopAppBar/title'

export let loading = false
export let title = ''
export let layout = 'default'
export let center = false // center page content, only applicable if using default layout
export let noProgress = false
let cell12 = 'mdc-layout-grid__cell mdc-layout-grid__cell--span-12'

$: $appBarTitle = title
</script>

<style>
div.mdc-layout-grid {
  height: 100%
}
</style>

<slot name="tabbar"/>
<div class="mdc-layout-grid">
  <div class="mdc-layout-grid__inner">
    {#if layout == 'default'}
      <div class={center ? `${cell12} flex column align-items-center` : `${cell12}`}>
        {#if loading && !noProgress}
          <Progress.Circular class="absolute r-50 t-50 z-10" />
        {/if}
        <slot />
      </div>
    {:else}
      {#if loading && !noProgress}
        <Progress.Circular class="absolute r-50 t-50 z-10" />
      {/if}
      <slot />
    {/if}
  </div>
</div>
