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
    onClick: () => console.log('click'),
  }}
/>

<Story
  name="Secondary"
  args={{
    class: '',
    onClick: () => console.log('click'),
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
    onClick: () => console.log('click'),
  }}
/>

<Story
  name="Icon After"
  args={{
    raised: true,
    appendIcon: "arrow_forward",
    class: '',
    onClick: () => console.log('click'),
  }}
/>

<Story
  name="Icon Before"
  args={{
    raised: true,
    class: '',
    onClick: () => console.log('click'),
    prependIcon: "work"
  }}
/>

