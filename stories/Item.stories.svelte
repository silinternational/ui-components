<script>
  import { Meta as MetaStory, Template, Story } from "@storybook/addon-svelte-csf";
  import { List } from "../components/mdc";
</script>

<MetaStory
  title="Atoms/List.Item"
  component={List.Item}
/>

<Template let:args>
  <List>
    <List.Item {...args} on:click={args.onClick}>
    </List.Item>
  </List>
</Template>

<Story
  name="Default"
  args={{
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
  }}
/>

<Story
  name="Primary"
  args={{
    class: '', //will only work with global class
    activated: false,
    graphicUrl: '',
    graphicAlt: '',
    icon: '',
    meta: '',
    primary: 'primary',
    secondary: '',
    text: 'Some text',
    withDivider: false,
    nonInteractive: false,
    tabindex: undefined,
    onClick: () => {},
  }}
/>

<Story
  name="Secondary"
  args={{
    class: '', //will only work with global class
    activated: false,
    graphicUrl: '',
    graphicAlt: '',
    icon: '',
    meta: '',
    primary: '',
    secondary: 'secondary',
    text: 'Some text',
    withDivider: false,
    nonInteractive: false,
    tabindex: undefined,
    onClick: () => {},
  }}
/>

<Story
  name="Meta"
  args={{
    class: '', //will only work with global class
    activated: false,
    graphicUrl: '',
    graphicAlt: '',
    icon: '',
    meta: 'meta',
    primary: '',
    secondary: '',
    text: 'Some text',
    withDivider: false,
    nonInteractive: false,
    tabindex: undefined,
    onClick: () => {},
  }}
/>

<Story
  name="nonInteractive"
  args={{
    class: '', //will only work with global class
    activated: false,
    graphicUrl: '',
    graphicAlt: '',
    icon: '',
    meta: 'meta',
    primary: '',
    secondary: '',
    text: 'Some text',
    withDivider: false,
    nonInteractive: true,
    tabindex: undefined,
    onClick: () => {},
  }}
/>

<Story
  name="Icon"
  args={{
    class: '', //will only work with global class
    activated: false,
    graphicUrl: '',
    graphicAlt: '',
    icon: 'done',
    meta: '',
    primary: '',
    secondary: '',
    text: 'Some text',
    withDivider: false,
    nonInteractive: false,
    tabindex: undefined,
    onClick: () => {},
  }}
/>