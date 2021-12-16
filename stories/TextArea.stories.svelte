<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { TextArea } from '../components/mdc'
import { copyAndModifyArgs } from './helpers.js'

let title = 'TextArea'

const args = {
  label: title,
  row: 8,
  class: '', //only works for global classes
}
</script>

<Meta title="Atoms/TextArea" component={TextArea} />

<Template let:args>
  <TextArea {...args} />
</Template>

<Story name="Default" {args} />

<Story name="Placeholder" args={copyAndModifyArgs(args, { placeholder: 'placeholder' })} />

<Story name="Label" args={copyAndModifyArgs(args, { label: 'label' })} />

<Story name="Maxlength" args={copyAndModifyArgs(args, { maxlength: 2048 })} />

<Story name="rtl" args={copyAndModifyArgs(args, { rtl: true })} />

<Story name="rows" args={copyAndModifyArgs(args, { rows: 2 })} />

<Story name="Autofocus" args={copyAndModifyArgs(args, { autofocus: true })} />
