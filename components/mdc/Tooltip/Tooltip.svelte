<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-tooltip -->
<script>
import { MDCTooltip, XPosition, YPosition } from '@material/tooltip'
import { onMount } from 'svelte'

/** @type {string} the id for the tooltip corresponding to ariaDescribedBy for the wrapper */
export let tooltipID
/** @type {string} can be one of: "start", "center", or "end"*/
export let positionX = undefined
/** @type {string} can be one of: "above" or "below" */
export let positionY = undefined

let element = {}
let mdcToolTip = {}

onMount(() => {
  mdcToolTip = new MDCTooltip(element)

  const xOptions = {
    start: XPosition.START,
    center: XPosition.CENTER,
    end: XPosition.END,
  }
  const yOptions = {
    above: YPosition.ABOVE,
    below: YPosition.BELOW,
  }
  const position = {}
  if (positionX) position.xPos = xOptions[positionX]
  if (positionY) position.yPos = yOptions[positionY]

  mdcToolTip.setTooltipPosition(position)

  return () => mdcToolTip.destroy()
})
</script>

<div bind:this={element} id={tooltipID} class="mdc-tooltip" role="tooltip" aria-hidden="true">
  <div class="mdc-tooltip__surface mdc-tooltip__surface-animation {$$props.class || ''}">
    <slot />
  </div>
</div>
