<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-data-table#data-table-with-column-sorting -->
<script>
import IconButton from '../IconButton'
import { generateRandomID } from '../../../random'

/** @type {boolean} if the value is numeric or not */
export let numeric = false
/** @type {string} the column ID */
export let columnID = ''
/** @type {boolean} if the column is sortable or not */
export let sortable = false

const labelID = generateRandomID('column-label-')
</script>

<th
  class="mdc-data-table__header-cell {$$props.class || ''} mdc-data-table__header-cell--with-sort"
  class:mdc-data-table__header-cell--numeric={numeric}
  role="columnheader"
  scope="col"
  data-column-id={columnID}
>
  {#if sortable}
    <div class="mdc-data-table__header-cell-wrapper">
      {#if numeric}
        <IconButton icon="arrow_upward" ariaLabel={`Sort by ${columnID}`} class="mdc-data-table__sort-icon-button" />
      {/if}
      <div class="mdc-data-table__header-cell-label">
        <slot />
      </div>
      {#if !numeric}
        <IconButton icon="arrow_upward" ariaLabel={`Sort by ${columnID}`} class="mdc-data-table__sort-icon-button" />
      {/if}
      <div class="mdc-data-table__sort-status-label" aria-hidden="true" id={labelID} />
    </div>
  {:else}
    <slot />
  {/if}
</th>
