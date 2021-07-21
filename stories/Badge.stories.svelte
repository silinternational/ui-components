<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import { Badge } from "../"
  import { copyAndModifyArgs } from "./helpers.js"

  const args = {
    class: '', //only works for global classes
    color: 'gray',
    borderRadius: '50%',
    padding: '.2em'
  }
</script>

<Meta
  title="Atoms/Badge"
  component={Badge}
/>

<Template let:args>
  <Badge {...args}>S</Badge>
</Template>

<Story
  name="Default"
  {args}
/>

<Story
  name="Blue"
  args={copyAndModifyArgs(args, {color: 'blue'})}
/>

<Story
  name="Pill"
  args={copyAndModifyArgs(args, {borderRadius: '12px', padding: '.1em .5em'})}
/>