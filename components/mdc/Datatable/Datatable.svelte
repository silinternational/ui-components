<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-data-table -->
<script>
import { MDCDataTable } from '@material/data-table'
import { createEventDispatcher, onMount } from 'svelte'
/**
 * @prop {string}
 * @description used for aria-label
 */
export let label = ''
/**
 * @prop {any}
 * @description used to register new Datatable Checkboxes when length changes
 */
export let checkboxIsMountedArray = []

const dispatch = createEventDispatcher()
let dataTable = {}

let element = {}

onMount(() => {
  dataTable = new MDCDataTable(element)

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

  return () => dataTable.destroy()
})

$: checkboxIsMountedArray.length && dataTable?.layout()
</script>

<div class="mdc-data-table w-100 {$$props.class}" bind:this={element}>
  <div class="mdc-data-table__table-container">
    <table class="mdc-data-table__table" aria-label={label}>
      <slot />
    </table>
  </div>
</div>
