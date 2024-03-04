<script>
import { copyAndModifyArgs } from './helpers.js'
import { StaticChip } from '../components/custom'
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'

const args = {
  class: '', //only works for global classes
  bgColor: '#e5e5e5',
  height: '36px',
}

const chips = ['chip 1', 'CHIP TWO', 'chip three is longer...................']
</script>

<Meta tags={['autodocs']} title="Atoms/StaticChip" component={StaticChip} />

<Template let:args>
  <div>
    {#each chips as chip}
      <StaticChip {...args}>{chip}</StaticChip>
    {/each}
  </div>
</Template>

<Story name="Default" {args} />
<Story name="bgColor" args={copyAndModifyArgs(args, { bgColor: 'green' })} />
<Story name="height" args={copyAndModifyArgs(args, { height: '28px' })} />
