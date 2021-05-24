<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import { TextArea } from "../components/mdc"
  import { copyAndModifyArgs } from "./helpers.js"

  let title = 'TextArea'

  const args = {
    label: title,
    row: 8,
    class: '' //only works for global classes
  }
</script>

<Meta
  title="Atoms/TextArea"
  component={TextArea}
/>

<Template let:args>
  <TextArea {...args}/>
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
