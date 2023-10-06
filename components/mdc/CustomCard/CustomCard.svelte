<script>
import Button from '../Button'
import Card from '../Card'

/** @type {string} the image source */
export let src = ''
/** @type {string} the image alt text, default to "image is missing" */
export let alt = 'image is missing'
/** @type {string} the card title, default to "Title" */
export let title = 'Title'
/** @type {string} the icon name */
export let icon = ''
/** @type {boolean} if the card is disabled or not */
export let disabled = false
/** @type {{label, url}[]} */
export let buttons
/** @type {string} the footer text */
export let footerText = ''
</script>

<style>
img {
  object-fit: cover;
  object-position: 33%;
}

.disabled {
  mix-blend-mode: luminosity;
}

.action {
  margin-left: 8px;
}
</style>

<Card class="h-100 py-1 {$$props.class || ''}">
  <div class="flex justify-center">
    <img class="w-100" {src} {alt} class:disabled />
  </div>

  <div class="flex justify-between align-items-center black">
    <h4>{title}</h4>

    <span class="material-icons">{icon}</span>
  </div>

  <div class="fs-14 mb-1">
    <slot />
  </div>

  <div class="action" slot="actions">
    {#if buttons && !disabled}
      {#each buttons as btn}
        <Button raised appendIcon="arrow_forward" url={btn.url}>{btn.label}</Button>
      {/each}
    {/if}

    {#if footerText}
      <div class="fs-12 gray">
        {footerText}
      </div>
    {/if}
  </div>
</Card>
