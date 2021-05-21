<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { IconButton } from "../components/mdc";
</script>

<Meta
  title="Atoms/IconButton"
  component={IconButton}
/>

<Template let:args>
  <IconButton {...args} on:click={args.onClick}/>
</Template>

<Story
  name="Primary"
  args={{
    icon: 'done',
    ariaLabel: 'ariaLabel',
    class: '', //will only work with global class
    label: "IconButton",
  }}
/>