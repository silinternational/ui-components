<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { TextField } from '../components/mdc'
import { copyAndModifyArgs } from './helpers.js'

const args = {
  'on:keydown': (event) => console.log('TextField keydown', event),
  'on:keypress': (event) => (lastKey = event.key),
  'on:keyup': (event) => console.log('TextField keyup', event),
  class: '', //will only work with global class
  label: '',
  value: '',
  placeholder: '',
  maxlength: 0,
  autofocus: false,
  disabled: false,
  required: false,
  icon: '',
  description: '',
  name: '',
  type: 'text',
}

let lastKey = ''
</script>

<Meta title="Atoms/TextField" component={TextField} />

<Template let:args>
  <TextField {...args} on:keydown={args['on:keydown']} on:keypress={args['on:keypress']} on:keyup={args['on:keyup']} />
  {#if lastKey}
    <p>Last key pressed: {lastKey}</p>
  {/if}
</Template>

<Story name="Default" {args} />

<Story name="label" args={copyAndModifyArgs(args, { label: 'label' })} />

<Story name="Placeholder" args={copyAndModifyArgs(args, { placeholder: 'Enter text here' })} />

<Story name="Autofocus" args={copyAndModifyArgs(args, { autofocus: true })} />

<Story name="Disabled" args={copyAndModifyArgs(args, { disabled: true })} />

<Story name="maxlength" args={copyAndModifyArgs(args, { maxlength: 50 })} />

<Story name="icon" args={copyAndModifyArgs(args, { icon: 'home' })} />

<Story name="Required" args={copyAndModifyArgs(args, { required: true })} />

<Story name="Description" args={copyAndModifyArgs(args, { description: 'a description' })} />

<Story name="Name" args={copyAndModifyArgs(args, { name: 'field' })} />

<Story name="Type" args={copyAndModifyArgs(args, { type: 'text' })} />

<Story name="showError" args={copyAndModifyArgs(args, { showError: true })} />

<Story name="showWarn" args={copyAndModifyArgs(args, { showWarn: true })} />
