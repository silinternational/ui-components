<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { Button } from "../components/mdc";
</script>

<Meta
  title="Atoms/Button"
  component={Button}
/>

<Template let:args>
  <Button {...args} on:click={args.onClick}>{args.label}</Button>
</Template>

<Story
  name="Primary"
  args={{
    raised: true,
    label: "Button",
    class: '',
  }}
/>

<Story
  name="Secondary"
  args={{
    label: "Button",
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
    label: "Button",
    class: '',
  }}
/>

<Story
  name="Icon After"
  args={{
    raised: true,
    appendIcon: "arrow_forward",
    label: "Button",
    class: '',
  }}
/>

<Story
  name="Icon Before"
  args={{
    raised: true,
    label: "Button",
    class: '',
    prependIcon: "work"
  }}
/>

