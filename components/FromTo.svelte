<script>
  import { findByID } from "./helpers"

  export let languages
  export let fromID = ''
  export let toID = ''

  $: from = findByID($languages, fromID) || {}
  $: to = findByID($languages, toID) || {}
</script>

{#if from.name && to.name}
  <span>{from.name}</span> → <span>{to.name}</span>
{/if}
