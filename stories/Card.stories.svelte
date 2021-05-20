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
  outlined
  name="outlined"
  args={{
    outlined: true,
    label: title,
  }}
/>

<Story
  name="Secondary"
  args={{
    secondary: "secondary",
    label: title,
  }}
/>

<Story
  name="Color"
  args={{
    color: "yellow",
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