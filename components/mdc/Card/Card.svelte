<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-card -->
<script>
export let secondary = ''
export let outlined = false
export let color = 'white'
</script>

<style>
.secondary-text {
  /* https://github.com/material-components/material-components-web/tree/master/packages/mdc-card#styles */
  padding: 16px;
  font-size: 80%;
}
.supporting-text {
  /* https://github.com/material-components/material-components-web/tree/master/packages/mdc-card#styles */
  padding-left: 16px;
  padding-right: 16px;
}
</style>

<div class="mdc-card {$$props.class}" style="background-color: {color}" class:mdc-card--outlined={outlined}>
  {#if secondary.length}
    <div class="secondary-text uppercase gray">
      {secondary}
    </div>
  {/if}
  <div class="supporting-text h-100">
    <slot />
  </div>
  {#if $$slots.actions}
    <div class="mdc-card__actions">
      <slot name="actions" />
    </div>
  {/if}
</div>
