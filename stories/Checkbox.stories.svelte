<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { Checkbox, setNotice, Snackbar } from '../'
import { copyAndModifyArgs } from './helpers.js'

const args = {
  label: 'Checkbox',
  class: '', //only works for global classes
  description: '',
  'on:checked': () => setNotice('checked'),
  'on:unchecked': () => setNotice('unchecked'),
  'on:change': (e) => alert('changed to ' + e.target.checked),
}
</script>

<Meta title="Atoms/Checkbox" component={Checkbox} />

<Template let:args>
  <Checkbox
    {...args}
    on:unchecked={args['on:unchecked']}
    on:checked={args['on:checked']}
    on:change={args['on:change']}
  />
</Template>

<Story name="Default" {args} />

<Story name="Checked" args={copyAndModifyArgs(args, { checked: true })} />

<Story name="Uppercase" args={copyAndModifyArgs(args, { uppercase: true })} />

<Story name="Disabled" args={copyAndModifyArgs(args, { disabled: true })} />

<Story name="Name" args={copyAndModifyArgs(args, { name: 'checkbox-name' })} />

<Story name="Value" args={copyAndModifyArgs(args, { name: 'checkbox-value' })} />

<Snackbar />
