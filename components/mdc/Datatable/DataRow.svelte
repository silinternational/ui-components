<script>
import { generateRandomID } from '../../../random'

export let clickable = false

const rowId = generateRandomID('row-id-')
</script>

<tr on:click on:keydown data-row-id={rowId} class="mdc-data-table__row {$$props.class}" class:pointer={clickable}>
  <slot {rowId} />
</tr>
