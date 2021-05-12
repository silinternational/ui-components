<script>
  import Badge from "./Badge.svelte"
  import { day } from "./const"
  import { formatDate } from "./dates"
  import { Progress } from "./mdc"

  export let gig = {}

  let showImage = true

  $: src = gig?.owner?.avatar_url
  $: ownerInitial = gig?.owner?.nickname?.charAt(0) || ''
  $: dueDate = formatDate(gig?.deadline || Date(), "default", {month: 'long', day: 'numeric'}).split("/")
  $: daysLeft = Math.floor((Date.parse(gig?.deadline) - now)/day) ?? '-'
  $: completed = Math.round(gig?.requests_count * gig?.percent_complete/100)

  const avatarError = () => showImage = false
  const now = Date.now()

</script>

<style>
  .description {
    flex-basis: 83.3%;
    text-align: start;
  }

  .textEnd {
    text-align: end;
  }

  .ml-4px {
    margin-left: 4px;
  }

  img {
    width: 24px;
    height: 24px;
  }
</style>

<h4 class="mdc-typography--headline5 align-center mt-0 black">
  {gig.name}
</h4>

<div class="flex justify-between">
  <div class="flex justify-between column textEnd">
    <div class="flex justify-between aligned">
      {#if showImage && src}
          <img {src} alt={'Owner avatar'} on:error={avatarError}/>
      {:else}
          <Badge color='blue'>{ownerInitial}</Badge>
      {/if}
      <div class="ml-4px">{gig?.owner?.nickname}</div>
    </div>

    <div class="gray">
      {dueDate}
      <br/>
      {daysLeft >= 0 ? `${daysLeft} days` : '-'}
    </div>
  </div>

  <div class="description ml-4px gray">
    {gig.description}
  </div>
</div>

<div class="my-2">
  <div class="mb-1">
    {completed}/{gig.requests_count} portions
  </div>

  <Progress.Linear value={gig?.percent_complete*.01 || 0}/>
</div>