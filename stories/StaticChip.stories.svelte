<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { StaticChip } from '../index.mjs'

const args = {
  class: '', //only works for global classes
}
</script>

<Meta title="Atoms/StaticChip" component={StaticChip} />

<Template let:args>
  <StaticChip {...args}>A Chip</StaticChip>
</Template>

<Story name="Default" {args} />
