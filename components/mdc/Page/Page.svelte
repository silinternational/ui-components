<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-layout-grid -->
<script>
import Progress from '../Progress'
import appBarTitle from '../TopAppBar/title'

/** @type {boolean} show progress indicator */
export let loading = false
/** @type {string} page title */
export let title = ''
/** @type {string} Default is 'default' which applies "flex column align-items-center", any other value will use the grid layout */
export let layout = 'default'
/** @type {boolean} center page content, only applicable if using default layout */
export let center = false // center page content, only applicable if using default layout
/** @type {boolean} disable progress indicator */
export let noProgress = false
let cell12 = 'mdc-layout-grid__cell mdc-layout-grid__cell--span-12'

$: $appBarTitle = title
</script>

<slot name="tabbar" />
<div class="mdc-layout-grid {$$props.class || ''}">
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
