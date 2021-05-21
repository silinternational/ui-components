<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { Button } from "../components/mdc";

  export let content = 'Button slot'
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
  args={{
    raised: true,
    class: '',
  }}
/>

<Story
  name="Secondary"
  args={{
    class: '',
    outlined: true,
    raised: true,
  }}
/>

<Story
  name="Disabled"
  args={{
    disabled: true,
    raised: true,
    class: '',
  }}
/>

<Story
  name="Icon After"
  args={{
    raised: true,
    appendIcon: "arrow_forward",
    class: '',
  }}
/>

<Story
  name="Icon Before"
  args={{
    raised: true,
    class: '',
    prependIcon: "work"
  }}
/>

