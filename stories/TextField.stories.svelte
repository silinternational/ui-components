<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import { TextField } from "../components/mdc"
  import { copyAndModifyArgs } from "./helpers.js"

  let title = 'TextField'

  const args = {
    label: title,
    value: '',
    placeholder: '',
    maxlength: undefined,
    autofocus: false,
    disabled: false,
    class: '',
  }
</script>

<Meta
  title="Atoms/TextField"
  component={TextField}
/>

<Template let:args>
  <TextField {...args}/>
</Template>

<Story
  name="Default"
  {args}
/>

<Story
  name="Placeholder"
  args={
    copyAndModifyArgs(args, {placeholder: 'Enter text here'})
  }
/>

<Story
  name="Autofocus"
  args={
    copyAndModifyArgs(args, {autofocus: true})
  }
/>

<Story
  name="Disabled"
  args={
    copyAndModifyArgs(args, {disabled: true})
  }
/>

