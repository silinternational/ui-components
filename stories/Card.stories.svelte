<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { Button, Card } from "../components/mdc";

  let title = 'Card'
</script>

<Meta
  title="Atoms/Card"
  component={Card}
/>

<Template let:args>
  <Card {...args}>
    {args.label}
  </Card>
</Template>

<Story
  name="outlined"
  args={{
    outlined: true,
    class: '',
    label: title,
  }}
/>

<Story
  name="Secondary"
  args={{
    secondary: "secondary",
    class: '',
    label: title,
  }}
/>

<Story
  name="Color"
  args={{
    color: "yellow",
    class: '',
    label: title,
  }}
/>

<Story let:args name="actions">
  <Card {...args}>
    {title}
    <p>Add optional actions with slot="actions" in the element you will put the actionable content.</p>
    <span slot="actions">
      <Button raised>button</Button>
    </span>
  </Card>
</Story>