<script>
import { MoneyInput } from '../index.mjs'
import { copyAndModifyArgs } from './helpers.js'
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'

let title = 'MoneyInput'

const args = {
  label: title,
  'on:keydown': (event) => console.log('keydown', event),
  'on:keypress': (event) => (lastKey = event.key),
  'on:keyup': (event) => console.log('keyup', event),
  class: '', //will only work with global class
  maxValue: 100,
  step: '.01',
}

let lastKey = ''
</script>

<Meta title="Atoms/MoneyInput" component={MoneyInput} />

<Template let:args>
  <MoneyInput {...args} on:keydown={args['on:keydown']} on:keypress={args['on:keypress']} on:keyup={args['on:keyup']} />
  {#if lastKey}
    <p>Last key pressed: {lastKey}</p>
  {/if}
</Template>

<Story name="Default" {args} />

<Story name="Required" args={copyAndModifyArgs(args, { required: true })} />

<Story name="Placeholder" args={copyAndModifyArgs(args, { placeholder: 'Placeholder' })} />

<Story name="Label" args={copyAndModifyArgs(args, { label: 'label' })} />

<Story name="MinValue" args={copyAndModifyArgs(args, { minValue: '0' })} />

<Story name="MaxValue" args={copyAndModifyArgs(args, { maxValue: '10' })} />

<Story name="Step" args={copyAndModifyArgs(args, { step: '.5' })} />

<Story name="Autofocus" args={copyAndModifyArgs(args, { autofocus: true })} />

<Story name="Disabled" args={copyAndModifyArgs(args, { disabled: true })} />

<Story name="Description" args={copyAndModifyArgs(args, { description: 'a description' })} />
