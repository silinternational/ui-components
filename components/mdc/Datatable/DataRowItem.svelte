<script>
/**
 * @prop {boolean}
 * @description Whether the cell contains numeric data.
 */
export let numeric = false
/**
 * @prop {number}
 * @description The number of columns the cell spans.
 */
export let colspan = 1
/**
 * @prop {boolean}
 * @description Whether the cell has low contrast.
 */
export let lowContrast = false
</script>

<style>
.lowContrast {
  color: var(--mdc-theme-text-secondary-on-light);
}
</style>

<td
  class="mdc-data-table__cell {$$props.class || ''}"
  class:lowContrast
  class:mdc-data-table__cell--numeric={numeric}
  {colspan}
>
  <slot />
</td>
