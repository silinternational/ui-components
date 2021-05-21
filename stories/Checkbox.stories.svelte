<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { Checkbox } from "../components/mdc";
</script>

<Meta
  title="Atoms/Checkbox"
  component={Checkbox}
/>

<Template let:args>
  <Checkbox {...args} on:click={args.onClick}/>
</Template>

<Story
  raised
  name="Checked"
  args={{
    label: "Checkbox",
    checked: true
  }}
/>

<Story
  name="Uppercase"
  args={{
    label: "Checkbox",
    uppercase: true
  }}
/>

<Story
  name="Disabled"
  args={{
    disabled: true,
    label: "Checkbox",
  }}
/>