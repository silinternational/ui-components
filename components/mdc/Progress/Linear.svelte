<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-linear-progress -->
<script>
import { MDCLinearProgress } from '@material/linear-progress'
import { onMount } from 'svelte'

export let indeterminate = false
export let value = 0

let element = {}
let mdcProgress

$: value, mdcProgress && (mdcProgress.progress = value)

onMount(() => {
  mdcProgress = new MDCLinearProgress(element)

  return () => mdcProgress.destroy()
})
</script>

<div role="progressbar" class="mdc-linear-progress {$$props.class}" class:mdc-linear-progress--indeterminate={indeterminate} aria-label="Progress Bar"
     aria-valuemin="0" aria-valuemax="1" aria-valuenow="0" bind:this={element}>
  <div class="mdc-linear-progress__buffer">
    <div class="mdc-linear-progress__buffer-bar"></div>
    <div class="mdc-linear-progress__buffer-dots"></div>
  </div>
  <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar bar-color">
    <span class="mdc-linear-progress__bar-inner"></span>
  </div>
  <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar bar-color">
    <span class="mdc-linear-progress__bar-inner"></span>
  </div>
</div>
