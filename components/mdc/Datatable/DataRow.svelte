<script>
import { generateRandomID } from '../../../random'

/** @type {boolean} if the row is clickable or not */
export let clickable = false

const rowId = generateRandomID('row-id-')
</script>

<tr on:click on:keydown data-row-id={rowId} class="mdc-data-table__row {$$props.class || ''}" class:pointer={clickable}>
  <slot {rowId} />
</tr>
