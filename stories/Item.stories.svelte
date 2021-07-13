<script>
  import { Meta as MetaStory, Template, Story } from "@storybook/addon-svelte-csf"
  import { List } from "../components/mdc"
  import { copyAndModifyArgs } from "./helpers.js"

  const args = {
    class: '', //will only work with global class
    text: 'Some text',
    'on:click': () => alert('you clicked'),
  }
</script>

<MetaStory
  title="Atoms/List.Item"
  component={List.Item}
/>

<Template let:args>
  <List.Item {...args} on:click={args['on:click']}/>
</Template>

<Story
  name="Default"
  {args}
/>

<Story
  name="Primary"
  args={copyAndModifyArgs(args, {primary: 'Primary text'})}
/>

<Story
  name="Secondary"
  args={copyAndModifyArgs(args, {primary: 'Primary text', secondary: 'Secondary text'})}
/>

<Story
  name="Meta"
  args={copyAndModifyArgs(args, {meta: 'meta text'})}
/>

<Story
  name="nonInteractive"
  args={copyAndModifyArgs(args, {nonInteractive: true})}
/>

<Story
  name="WithDivider"
  args={copyAndModifyArgs(args, {withDivider: true})}
/>

<Story
  name="Icon"
  args={copyAndModifyArgs(args, {icon: 'done'})}
/>