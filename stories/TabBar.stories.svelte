<script>
import { Meta, Story } from '@storybook/addon-svelte-csf'
import { TabBar } from '../components/mdc'

const args = {
  tab: 0,
  'on:click': () => alert('you tabbed'),
  class: '', //only works for global classes
}
</script>

<Meta title="Molecule/TabBar" component={TabBar} />

<Story name="Default" {args}>
  <TabBar tab={args.tab}>
    <TabBar.Scroller>
      <TabBar.Tab label="tab 1" on:click={args['on:click']} active={args.tab === 0} />
      <TabBar.Tab label="tab 2" on:click={args['on:click']} active={args.tab === 1} />
      <TabBar.Tab label="tab 3" on:click={args['on:click']} active={args.tab === 2} />
    </TabBar.Scroller>
  </TabBar>
</Story>
