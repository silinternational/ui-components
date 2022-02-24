<script>
import { Progress } from '../index.mjs'
import { copyAndModifyArgs } from './helpers.js'
import './_index.scss'
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'

const args = {
  class: '', //only works for global classes
  value: 0.5,
  barColorProvided: false,
}
</script>

<Meta title="Atoms/Progress.Linear" component={Progress.Linear} />

<Template let:args>
  <Progress.Linear {...args} />
</Template>

<Story name="Determinate" {args} />

<Story name="Indeterminate" args={copyAndModifyArgs(args, { indeterminate: true })} />
