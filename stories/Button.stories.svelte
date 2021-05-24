<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import { Button } from "../components/mdc"
  import { copyAndModifyArgs } from "./helpers.js"

  export let content = 'Button slot'

  const args = {
    raised: true,
    class: '',
    onClick: () => {},
  }
</script>

<Meta
  title="Atoms/Button"
  component={Button}
/>

<Template let:args>
  <Button {...args} on:click={args.onClick}>{content}</Button>
</Template>

<Story
  name="Primary"
  {args}
/>

<Story
  name="Secondary"
  args={copyAndModifyArgs(args, { outlined: true })}
/>

<Story
  name="Disabled"
  args={copyAndModifyArgs(args, { disabled: true })}
/>

<Story
  name="Icon After"
  args={copyAndModifyArgs(args, { appendIcon: 'arrow_forward' })}
/>

<Story
  name="Icon Before"
  args={copyAndModifyArgs(args, { prependIcon: 'work' })}
/>

