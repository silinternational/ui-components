<script>
import { Dialog } from '../'
import { copyAndModifyArgs } from './helpers.js'
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'

const args = {
  'on:chosen': (e) => console.log(e.detail),
  'on:closed': (e) => console.log(e.detail),
  open: true,
  class: '', //only works for global classes
}
</script>

<Meta title="Atoms/Dialog.Alert" component={Dialog.Alert} />

<Template let:args>
  <Dialog.Alert {...args} on:chosen={args['on:chosen']} on:closed={args['on:closed']}>Main slot here</Dialog.Alert>
</Template>

<Story name="Default" {args} />

<Story name="Title" args={copyAndModifyArgs(args, { title: 'title' })} />

<Story name="TitleIcon" args={copyAndModifyArgs(args, { titleIcon: 'warning' })} />

<Story name="Default action" args={copyAndModifyArgs(args, { defaultAction: 'cancel' })} />

<Story
  name="Buttons"
  args={copyAndModifyArgs(args, {
    buttons: [
      {
        label: 'quit',
        action: 'quit',
        class: 'mdc-dialog__button',
      },
      {
        label: 'discard',
        action: 'discard',
        class: 'mdc-dialog__button',
      },
    ],
  })}
/>
