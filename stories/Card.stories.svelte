<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { Button, Card } from '../components/mdc'
import { copyAndModifyArgs } from './helpers.js'

let title = 'Card'

const args = {
  class: '', //will only work with global class
  label: title,
}
</script>

<Meta title="Atoms/Card" component={Card} />

<Template let:args>
  <Card {...args}>
    {args.label}
  </Card>
</Template>

<Story name="Default" {args} />

<Story name="Outlined" args={copyAndModifyArgs(args, { outlined: true })} />

<Story name="Secondary" args={copyAndModifyArgs(args, { secondary: 'secondary' })} />

<Story name="Color" args={copyAndModifyArgs(args, { color: 'yellow' })} />

<Story let:args name="actions">
  <Card {...args}>
    {title}
    <p>Add optional actions with slot="actions" in the element you will put the actionable content.</p>
    <span slot="actions">
      <Button raised>button</Button>
    </span>
  </Card>
</Story>
