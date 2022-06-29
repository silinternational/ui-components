<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-data-table -->
<script>
import { MDCDataTable } from '@material/data-table'
import { createEventDispatcher, onMount } from 'svelte'

export let label = ''

const dispatch = createEventDispatcher()

let element = {}

onMount(() => {
  const dataTable = new MDCDataTable(element)

  dataTable.listen('MDCDataTable:sorted', (event) => {
    dispatch('sorted', event.detail)
  })

  dataTable.listen('MDCDataTable:selectedAll', () => {
    dispatch('selectedAll')
  })

  dataTable.listen('MDCDataTable:unselectedAll', () => {
    dispatch('unselectedAll')
  })

  dataTable.listen('MDCDataTable:rowSelectionChanged', (event) => {
    dispatch('rowSelectionChanged', event.detail)
  })

  // This does not work because of an MDC bug. See https://github.com/material-components/material-components-web/issues/6385
  // If checkboxes are needed, check for a release of the PR linked to the above issue, or pull in the destroy code here.
  //return () => dataTable.destroy()
})
</script>

<div class="mdc-data-table w-100 {$$props.class}" bind:this={element}>
  <div class="mdc-data-table__table-container">
    <table class="mdc-data-table__table" aria-label={label}>
      <slot />
    </table>
  </div>
</div>
