<!-- https://github.com/material-components/material-components-web/tree/master/packages/mdc-card -->
<script>
export let secondary = ''
export let outlined = false
export let color = 'white'
export let isClickable = false
export let noPadding = false

$: tabindex = isClickable ? '0' : undefined
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
.noPadding {
  padding: 0;
}
</style>

<div {tabindex} class="mdc-card mdc-typography {$$props.class}" style="background-color: {color}" class:mdc-card--outlined={outlined} class:mdc-card__primary-action={isClickable} on:click on:mousedown on:mouseup on:keypress>
  {#if secondary.length}
    <div class="secondary-text uppercase gray" class:noPadding>
      {secondary}
    </div>
  {/if}
  <div class="supporting-text h-100" class:noPadding>
    <slot />
  </div>
  {#if $$slots.actions}
    <div class="mdc-card__actions" class:noPadding>
      <slot name="actions" />
    </div>
  {/if}
</div>
