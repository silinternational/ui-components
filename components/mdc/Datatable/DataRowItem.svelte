<script>
export let numeric = false
export let colspan = 1
</script>

<td class="mdc-data-table__cell {$$props.class}" class:mdc-data-table__cell--numeric={numeric} {colspan}
  ><slot /></td
>
