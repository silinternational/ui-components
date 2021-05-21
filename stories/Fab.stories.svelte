<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { Fab } from "../components/mdc";
</script>

<Meta
  title="Atoms/Fab"
  component={Fab}
/>

<Template let:args>
  <Fab {...args} on:click={args.onClick}/>
</Template>

<Story
  name="Default"
  args={{
    icon: 'add',
    label: "Fab",
    url: '',
    class: '', //will only work with global class
  }}
/>