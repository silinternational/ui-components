<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-circular-progress -->
<script>
import { MDCCircularProgress } from '@material/circular-progress'
import { onMount } from 'svelte'

let element = {}

onMount(() => {
  let mdcProgress = {}

  const delay = setTimeout(() => {
    mdcProgress = new MDCCircularProgress(element)

    mdcProgress.determinate = false
  }, 1000)

  return () => {
    clearTimeout(delay)
    mdcProgress.destroy && mdcProgress.destroy()
  }
})
</script>

<!-- from docs: IMPORTANT: Do not introduce space between the adjacent </div><div> tags below. Doing so will produce unwanted visual artifacts. -->
<div class="mdc-circular-progress {$$props.class}" style="width:48px;height:48px;" role="progressbar" aria-label="Progress Circle" aria-valuemin="0" aria-valuemax="1" bind:this={element}>
  <div class="mdc-circular-progress__determinate-container">
    <svg class="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <circle class="mdc-circular-progress__determinate-track" cx="24" cy="24" r="18" stroke-width="4"/>
      <circle class="mdc-circular-progress__determinate-circle" cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="113.097" stroke-width="4"/>
    </svg>
  </div>
  <div class="mdc-circular-progress__indeterminate-container">
    <div class="mdc-circular-progress__spinner-layer">
      <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
        <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549" stroke-width="4"/>
        </svg>
      </div><div class="mdc-circular-progress__gap-patch">
        <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549" stroke-width="3.2"/>
        </svg>
      </div><div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
        <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549" stroke-width="4"/>
        </svg>
      </div>
    </div>
  </div>
</div>
