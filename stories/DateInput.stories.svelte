<script>
import { Button, DateInput, Snackbar, setNotice } from '../'
import Form from '../components/custom/Form/Form.svelte'
import { copyAndModifyArgs } from './helpers.js'
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'

let valueForValueStory = new Date().toISOString().split('T')[0]

let value

const args = {
  class: '', //only works for global classes
  'on:blur': function (e) {
    console.log(' DateInput blur occurred: ', e)
  },
}
</script>

<Meta title="Atoms/DateInput" component={DateInput} />

<Template let:args>
  <Form class="flex column" on:submit={() => setNotice(value || 'No date selected')}>
    <DateInput {...args} on:blur={args['on:blur']} bind:value />

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

<Story name="value">
  <Form class="flex column" on:submit={() => setNotice(valueForValueStory || 'No date selected')}>
    <DateInput on:blur={args['on:blur']} bind:value={valueForValueStory} />

    <Button raised>Submit</Button>

    <Snackbar />
  </Form>
</Story>

<Story name="name" args={copyAndModifyArgs(args, { name: 'Anniversary' })} />

<Story name="disabled" args={copyAndModifyArgs(args, { disabled: true })} />

<Story name="autofocus" args={copyAndModifyArgs(args, { autofocus: true })} />

<Story name="required" args={copyAndModifyArgs(args, { required: true, errorColor: 'red' })} />
