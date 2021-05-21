<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { TextArea } from "../components/mdc";

  let title = 'TextArea'
</script>

<Meta
  title="Atoms/TextArea"
  component={TextArea}
/>

<Template let:args>
  <TextArea {...args}/>
</Template>

<Story
  name="Default"
  args={{
    label: title,
    value: ' ',
    placeholder: '',
    row: 8,
    maxlength: undefined,
    autofocus: false,
    rtl: false,
    class: '',
  }}
/>

<Story
  name="Placeholder"
  args={{
    label: title,
    value: ' ',
    placeholder: 'Enter text here',
    row: 8,
    maxlength: undefined,
    autofocus: false,
    rtl: false,
    class: '',
  }}
/>

<Story
  name="Autofocus"
  args={{
    label: title,
    value: ' ',
    placeholder: '',
    row: 8,
    maxlength: undefined,
    autofocus: true,
    rtl: false,
    class: '',
  }}
/>
