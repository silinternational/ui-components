<script>
import { Dialog } from '../'
import { onMount, tick } from 'svelte'

export let steps = []
export let data = {}

let openDialog = false
let step = 0
let tourTitle = ''
let tourMessage = '' // tour message can accept html markup -- use caution to not send user-generated content
let target = ''
let buttons = []

let anchorEl = {}

$: setAlertProps(step, data)

onMount(() => {
  showStep(0)
})

async function alertChosen(choice) {
  openDialog = false

  const thisStep = steps[step]

  if (choice === 'discard') {
    if (target) {
      anchorEl.href = target
      anchorEl.click()
      return
    }
    step++
    showStep()
  } else if (choice === 'cancel' && thisStep.previous >= 0) {
    step = thisStep.previous
    showStep()
  }
}

async function showStep() {
  let thisStep = steps[step]

  while (thisStep.decider) {
    step = thisStep.decider() ? thisStep.trueStep : thisStep.falseStep
    thisStep = steps[step]
  }

  await tick() // dialog can't be reopened immediately, so wait a bit
  openDialog = true
}

function setAlertProps() {
  const thisStep = steps[step]

  tourMessage = thisStep.content || ''
  tourTitle = thisStep.title || ''
  target = thisStep.target || ''
  for (const [key, value] of Object.entries(data)) {
    tourMessage = tourMessage.replace(key, value)
    tourTitle = tourTitle.replace(key, value)
    target = target.replace(key, value)
  }

  buttons = [
    { action: 'cancel', label: thisStep.left || '← Previous' },
    { action: 'discard', label: thisStep.right || 'Next →' },
  ]
}
</script>

<Dialog.Alert
  class={$$props.class}
  title={tourTitle}
  on:chosen={(event) => alertChosen(event.detail)}
  open={openDialog}
  {buttons}>{@html tourMessage}</Dialog.Alert
>
<a bind:this={anchorEl} href="/"><span /></a>
