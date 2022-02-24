<script>
import { Progress } from '../index.mjs'
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'

const args = {
  class: '', //only works for global classes
}
</script>

<Meta title="Atoms/Progress.Circular" component={Progress.Circular} />

<Template let:args>
  <Progress.Circular {...args} />
</Template>

<Story name="Default" {args} />
