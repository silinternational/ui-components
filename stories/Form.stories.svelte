<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { TextField, MoneyInput, TextArea, Button } from '../components/mdc'
import { Form } from '../components/custom'
import { copyAndModifyArgs } from './helpers'

const args = {
  class: '', //only works for global classes
  id: '',
  saveToLocalStorage: false,
  success: false,
  'on:submit': function () {
    alert('submitted successfully, form will now reset and remove any saved values')
    this.success = true
  },
}
</script>

<Meta title="Molecule/Form" component={Form} />

<Template let:args>
  <Form on:submit={args['on:submit']} {...args}>
    <TextField label="first" name="first" />

    <TextArea label="second" name="second" rows={4} />

    <MoneyInput label="third" name="third" />

    <Button raised>Submit</Button>
  </Form>
</Template>

<Story name="Default" {args} />

<Story name="Id" args={copyAndModifyArgs(args, { id: '123' })} />

<Story name="Save To Local Storage" args={copyAndModifyArgs(args, { saveToLocalStorage: true })} />
