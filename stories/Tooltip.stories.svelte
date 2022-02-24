<script>
import { Tooltip } from '../'
import { copyAndModifyArgs } from './helpers.js'
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'

const args = {
  tooltipID: '1',
  class: '', //only works for global classes
}
</script>

<Meta title="Atoms/Tooltip" component={Tooltip} />

<Template let:args>
  <div class="flex justify-center my-4">
    <Tooltip.Wrapper ariaDescribedBy={args.tooltipID}>wrapper slot</Tooltip.Wrapper>
  </div>

  <Tooltip {...args}>Tooltip main slot here</Tooltip>
</Template>

<Story name="Default" {args} />

<Story name="Position" args={copyAndModifyArgs(args, { positionX: 'start', positionY: 'above' })} />
