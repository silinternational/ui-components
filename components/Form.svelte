<style>
:global(form > *) {
  margin-top: 2rem;
}
</style>

<form class="w-100" on:submit|preventDefault autocomplete="off">
  <slot />
</form>
