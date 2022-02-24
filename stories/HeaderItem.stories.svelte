<script>
import { Datatable } from '../index.mjs'
import { copyAndModifyArgs } from './helpers.js'
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'

const args = {
  class: '', //only works for global classes
}
</script>

<Meta title="Atoms/Datatable.Header.Item" component={Datatable.Header.Item} />

<Template let:args>
  <Datatable.Header.Item {...args}>42</Datatable.Header.Item>
</Template>

<Story name="Default" {args} />

<Story name="Numberic" args={copyAndModifyArgs(args, { numeric: 'true' })} />

<Story name="Sortable" args={copyAndModifyArgs(args, { sortable: 'true' })} />
