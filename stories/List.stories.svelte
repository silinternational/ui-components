<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { List } from "../components/mdc";
</script>

<Meta
  title="Molecule/List"
  component={List}
/>

<Template let:args>
  <List {...args} on:click={args.onClick}>
    <List.Item>list item 1</List.Item>
    <List.Divider/>
    <List.Item>list item 2</List.Item>
    <List.Divider/>
    <List.Item>list item 3</List.Item>
  </List>
</Template>

<Story
  name="Default"
  args={{
    twoLine: false,
    avatar: false,
    class: '', //will only work with global class
  }}
/>

<Story
  name="TwoList"
  args={{
    twoLine: true,
    avatar: false,
    class: '', //will only work with global class
  }}
/>

<Story
  name="Avatar"
  args={{
    twoLine: false,
    avatar: true,
    class: '', //will only work with global class
  }}
/>