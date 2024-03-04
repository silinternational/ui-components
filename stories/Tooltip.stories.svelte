<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { Tooltip } from '../components/mdc'
import { copyAndModifyArgs } from './helpers.js'

const args = {
  tooltipID: '1',
  class: '', //only works for global classes
}
</script>

<Meta tags={['autodocs']} title="Atoms/Tooltip" component={Tooltip} />

<Template let:args>
  <div class="flex justify-center my-4">
    <Tooltip.Wrapper ariaDescribedBy={args.tooltipID}>wrapper slot</Tooltip.Wrapper>
  </div>

  <Tooltip {...args}>Tooltip main slot here</Tooltip>
</Template>

<Story name="Default" {args} />

<Story name="Position" args={copyAndModifyArgs(args, { positionX: 'start', positionY: 'above' })} />
