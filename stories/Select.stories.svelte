<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { Button, Select, Snackbar, setNotice } from '../components/mdc'
import { copyAndModifyArgs } from './helpers.js'
import { Form } from '../components/custom'

const args = {
  options: [
    { name: 'choice 1', id: '0' },
    { name: 'choice 2', id: '1' },
    { name: 'choice 3', id: '2' },
    { name: 'choice 4', id: '3' },
    { name: 'choice 5', id: '4' },
    { name: 'choice 6', id: '5' },
  ],
  description: '',
  'on:change': (e) => console.log('option: ', e.detail, 'const onChange = (e) => selectedOption = e.detail'),
  'on:populated': () => console.log('it is safe to set selectedID'),
  class: '', //only works for global classes
}
</script>

<Meta title="Atoms/Select" component={Select} />

<Template let:args>
  <Form on:submit={(e) => setNotice('submitted')}>
    <p>
      <Select {...args} on:change={args['on:change']} on:populated={args['on:populated']} />
    </p>
    <Button raised>Submit</Button>
  </Form>

  <Snackbar />
</Template>

<Story name="Default" {args} />

<Story name="selectedID" args={copyAndModifyArgs(args, { selectedID: '5' })} />

<Story name="Label" args={copyAndModifyArgs(args, { label: 'Label' })} />

<Story name="Width" args={copyAndModifyArgs(args, { width: '560px' })} />

<Story name="Disabled" args={copyAndModifyArgs(args, { disabled: true })} />

<Story name="required" args={copyAndModifyArgs(args, { required: true })} />

<Story name="showError" args={copyAndModifyArgs(args, { showError: true })} />

<Story name="name" args={copyAndModifyArgs(args, { name: 'category' })} />
