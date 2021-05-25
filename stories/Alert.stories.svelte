<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import { Dialog } from "../components/mdc"
  import { copyAndModifyArgs } from "./helpers.js"

  const args = {
    onChosen: e => console.log(e.detail),
    onClosed: () => {},
    open: true,
    class: '', //only works for global classes
  }
</script>

<Meta
  title="Atoms/Dialog.Alert"
  component={Dialog.Alert}
/>

<Template let:args>
  <Dialog.Alert {...args} on:chosen={args.onChosen} on:closed={args.onClosed}/>
</Template>

<Story
  name="Default"
  {args}
/>

<Story
  name="Title"
  args={
    copyAndModifyArgs(args, {title: 'title'})
  }
/>

<Story
  name="Default action"
  args={
    copyAndModifyArgs(args, {defaultAction: 'cancel'})
  }
/>

<Story
  name="Buttons"
  args={
    copyAndModifyArgs(args, {
      buttons: [
        {
          label: 'quit', 
          action: 'quit',
          class: 'mdc-dialog__button'
        },
        {
          label: 'discard', 
          action: 'discard',
          class: 'mdc-dialog__button'
        }
      ]
    })
  }
/>