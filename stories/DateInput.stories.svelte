<script>
import { DateInput } from '../components/custom'
import Form from '../components/custom/Form/Form.svelte'
import { setNotice } from '../components/mdc'
import Button from '../components/mdc/Button/Button.svelte'
import Snackbar from '../components/mdc/Snackbar/Snackbar.svelte'
import { copyAndModifyArgs } from './helpers.js'
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'

const date = new Date().toISOString()

let value = date.split('T')[0]

const args = {
  class: '', //only works for global classes
  'on:blur': function (e) {
    console.log(' DateInput blur occurred: ', e)
  },
}
</script>

<Meta title="Atoms/DateInput" component={DateInput} />

<Template let:args>
  <Form class="flex column" on:submit={() => setNotice(args.value || 'No date selected')}>
    <DateInput {...args} on:blur={args['on:blur']} color />

    <Button raised>Submit</Button>

    <Snackbar />
  </Form>
</Template>

<Story name="Default" {args} />

<Story name="color" args={copyAndModifyArgs(args, { color: 'red' })} />

<Story name="borderColor" args={copyAndModifyArgs(args, { borderColor: 'red' })} />

<Story name="padding" args={copyAndModifyArgs(args, { padding: '16px' })} />

<Story name="width" args={copyAndModifyArgs(args, { width: '300px' })} />

<Story name="fontSize" args={copyAndModifyArgs(args, { fontSize: '18px' })} />

<Story name="value" args={copyAndModifyArgs(args, { value })} />

<Story name="disabled" args={copyAndModifyArgs(args, { disabled: true })} />

<Story name="autofocus" args={copyAndModifyArgs(args, { autofocus: true })} />

<Story name="required" args={copyAndModifyArgs(args, { required: true, errorColor: 'red' })} />
