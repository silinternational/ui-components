<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { Page } from '../index'
import { copyAndModifyArgs } from './helpers.js'

const args = {
  class: '', //will only work with global class
  loading: false,
  title: 'My Page!',
  layout: 'default',
  center: false, // center page content, only applicable if using default layout
  noProgress: false,
}
</script>

<Meta title="Atoms/Page" component={Page} />

<Template let:args>
  <Page {...args}>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
      <Page.Subheader>
        {args.title}
      </Page.Subheader>
    </div>

    {#if args.layout == 'grid'}
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3">3 columns</div>
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
        Add optional grid cells using classes like "mdc-layout-grid__cell mdc-layout-grid__cell--span-6".
      </div>
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3">3 columns</div>
    {/if}
  </Page>
</Template>

<Story name="Default" args={copyAndModifyArgs(args, { center: true })} />

<Story name="Grid" args={copyAndModifyArgs(args, { layout: 'grid' })} />

<Story name="Loading" args={copyAndModifyArgs(args, { loading: true, noProgress: false })} />
