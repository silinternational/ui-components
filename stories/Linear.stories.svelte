<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import { Progress } from "../components/mdc"
  import { copyAndModifyArgs } from "./helpers.js"

  const args = {
    class: '', //only works for global classes
    value: .5,
    barColorProvided: false
  }
</script>

<Meta
  title="Atoms/Progress.Linear"
  component={Progress.Linear}
/>

<Template let:args>
  <Progress.Linear {...args}/>
</Template>

<Story
  name="Determinate"
  {args}
/>

<Story
  name="Indeterminate"
  args={copyAndModifyArgs(args, {indeterminate: true})}
/>