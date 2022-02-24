<script>
import { TabBar } from '../index.mjs'
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'

const args = {
  tab: 0,
  'on:click': () => alert('you tabbed'),
  class: '', //only works for global classes
}
</script>

<Meta title="Atoms/TabBar" component={TabBar} />

<Template let:args>
  <TabBar {...args}>
    <TabBar.Scroller>
      <TabBar.Tab label="tab 1" on:click={args['on:click']} active={args.tab === 0} />
      <TabBar.Tab label="tab 2" on:click={args['on:click']} active={args.tab === 1} />
      <TabBar.Tab label="tab 3" on:click={args['on:click']} active={args.tab === 2} />
    </TabBar.Scroller>
  </TabBar>
</Template>

<Story name="Default" {args} />
