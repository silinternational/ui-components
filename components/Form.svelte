<style>
:global(form > *) {
  margin-top: 2rem;
}

form {
  width: 100%;
}
</style>

<form on:submit|preventDefault autocomplete="off">
  <slot />
</form>
