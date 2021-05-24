<script>
  import { Meta as MetaStory, Template, Story } from "@storybook/addon-svelte-csf";
  import { List } from "../components/mdc";
  import { copyAndModifyArgs } from "./helpers.js"

  const args = {
    class: '', //will only work with global class
    activated: false,
    graphicUrl: '',
    graphicAlt: '',
    icon: '',
    meta: '',
    primary: '',
    secondary: '',
    text: 'Some text',
    withDivider: false,
    nonInteractive: false,
    tabindex: undefined,
    onClick: () => {},
  }
</script>

<MetaStory
  title="Atoms/List.Item"
  component={List.Item}
/>

<Template let:args>
  <List.Item {...args} on:click={args.onClick}/>
</Template>

<Story
  name="Default"
  args={args}
/>

<Story
  name="Primary"
  args={copyAndModifyArgs(args, [{key: 'primary', value: 'Primary text'}])}
/>

<Story
  name="Secondary"
  args={copyAndModifyArgs(args, [{key: 'primary', value: 'Primary text'}, {key: 'secondary', value: 'Secondary text'}])}
/>

<Story
  name="Meta"
  args={copyAndModifyArgs(args, [{key: 'meta', value: 'meta text'}])}
/>

<Story
  name="nonInteractive"
  args={copyAndModifyArgs(args, [{key: 'nonInteractive', value: true}])}
/>

<Story
  name="WithDivider"
  args={copyAndModifyArgs(args, [{key: 'withDivider', value: true}])}
/>

<Story
  name="Icon"
  args={copyAndModifyArgs(args, [{key: 'icon', value: 'done'}])}
/>