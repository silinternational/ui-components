<svelte:options tag="sil-data-row" />

<script>
export let clickable = false
</script>

<tr on:click on:keydown class="mdc-data-table__row {$$props.class}" class:pointer={clickable}>
  <slot />
</tr>
