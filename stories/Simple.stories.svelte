<script>
import { Dialog } from '../index.mjs'
import { copyAndModifyArgs } from './helpers.js'
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'

const args = {
  'on:chosen': (e) => console.log(e.detail),
  open: true,
  items: [
    { id: '1', name: 'item1 name' },
    { id: '2', name: 'item2 name' },
  ],
  class: '', //only works for global classes
}
</script>

<Meta title="Atoms/Dialog.Simple" component={Dialog.Simple} />

<Template let:args>
  <Dialog.Simple {...args} on:chosen={args['on:chosen']} />
</Template>

<Story name="Default" {args} />

<Story name="Title" args={copyAndModifyArgs(args, { title: 'title' })} />

<Story
  name="Items"
  args={copyAndModifyArgs(args, {
    items: [
      { id: '1', name: 'item1 name' },
      { id: '2', name: 'item2 name' },
      { id: '3', name: 'item3 name' },
      { id: '4', name: 'item4 name' },
    ],
  })}
/>
