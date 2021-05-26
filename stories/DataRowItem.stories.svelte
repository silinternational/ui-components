<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import { Datatable } from "../components/mdc"
  import { copyAndModifyArgs } from "./helpers.js"

  const args = {
    class: '', //only works for global classes
  }
</script>

<Meta
  title="Atoms/Datatable.Data.Row.Item"
  component={Datatable.Data.Row.Item}
/>

<Template let:args>
  <Datatable.Data.Row.Item {...args}>42</Datatable.Data.Row.Item>
</Template>

<Story
  name="Default"
  {args}
/>

<Story
  name="Numberic"
  args={copyAndModifyArgs(args, {numeric: "true"})}
/>

<Story
  name="Colspan 1"
  args={copyAndModifyArgs(args, {colspan: 1})}
/>