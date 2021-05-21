<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { TextField } from "../components/mdc";

  let title = 'TextField'
</script>

<Meta
  title="Atoms/TextField"
  component={TextField}
/>

<Template let:args>
  <TextField {...args}>
    {args.label}
  </TextField>
</Template>

<Story
  name="Default"
  args={{
    label: title,
    value: '',
    placeholder: '',
    maxlength: undefined,
    autofocus: false,
    disabled: false,
    class: '',
  }}
/>

<Story
  name="Placeholder"
  args={{
    label: title,
    value: '',
    placeholder: 'Enter text here',
    maxlength: undefined,
    autofocus: false,
    disabled: false,
    class: '',
  }}
/>

<Story
  name="Autofocus"
  args={{
    label: title,
    value: '',
    placeholder: '',
    maxlength: undefined,
    autofocus: true,
    disabled: false,
    class: '',
  }}
/>

<Story
  name="Disabled"
  args={{
    label: title,
    value: '',
    placeholder: '',
    maxlength: undefined,
    autofocus: false,
    disabled: true,
    class: '',
  }}
/>

