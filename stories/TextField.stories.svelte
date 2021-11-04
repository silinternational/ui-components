<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { TextField } from '../components/mdc'
import { copyAndModifyArgs } from './helpers.js'

let title = 'TextField'

const args = {
  label: title,
  class: '', //will only work with global class
}
const keydown = (event) => console.log('TextField keydown', event)
const keypress = (event) => (lastKey = event.key)
const keyup = (event) => console.log('TextField keyup', event)

let lastKey = ''
</script>

<Meta title="Atoms/TextField" component={TextField} />

<Template let:args>
  <TextField {...args} on:keydown={keydown} on:keypress={keypress} on:keyup={keyup} />
  {#if lastKey}
    <p>Last key pressed: {lastKey}</p>
  {/if}
</Template>

<Story name="Default" {args} />

<Story name="Placeholder" args={copyAndModifyArgs(args, { placeholder: 'Enter text here' })} />

<Story name="Autofocus" args={copyAndModifyArgs(args, { autofocus: true })} />

<Story name="Disabled" args={copyAndModifyArgs(args, { disabled: true })} />
