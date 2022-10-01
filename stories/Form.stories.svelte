<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { TextField, MoneyInput, TextArea } from '../components/mdc'
import { Form } from '../components/custom'
import { copyAndModifyArgs } from './helpers'

const args = {
  class: '', //only works for global classes
  id: '',
  saveToLocalStorage: false,
  onSubmit: () => {},
}
</script>

<Meta title="Molecule/Form" component={Form} />

<Template let:args>
  <Form on:submit={args.onSubmit} {...args}>
    <TextField label='first' name='first'/>

    <TextArea label='second' name='second' />

    <MoneyInput label='third' name='third' />
  </Form>
</Template>

<Story name="Default" {args} />

<Story name="Id" args={copyAndModifyArgs(args, { id: '123' })} />

<Story name="Save To Local Storage" args={copyAndModifyArgs(args, { saveToLocalStorage: true })} />
