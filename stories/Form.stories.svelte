<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { Form, TextField } from '../'

const args = {
  class: '', //only works for global classes
  onSubmit: () => {},
}
</script>

<Meta title="Molecule/Form" component={Form} />

<Template let:args>
  <Form on:submit={args.onSubmit} {...args}>
    <TextField />
  </Form>
</Template>

<Story name="Default" {args} />
