<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { Checkbox } from '../components/mdc'
import { copyAndModifyArgs } from './helpers.js'

const args = {
  label: 'Checkbox',
  class: '', //only works for global classes
  'on:checked': () => alert('checked'),
  'on:unchecked': () => alert('unchecked'),
}
</script>

<Meta title="Atoms/Checkbox" component={Checkbox} />

<Template let:args>
  <Checkbox {...args} on:unchecked={args['on:unchecked']} on:checked={args['on:checked']} />
</Template>

<Story name="Default" {args} />

<Story name="Checked" args={copyAndModifyArgs(args, { checked: true })} />

<Story name="Uppercase" args={copyAndModifyArgs(args, { uppercase: true })} />

<Story name="Disabled" args={copyAndModifyArgs(args, { disabled: true })} />
