<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { Datatable } from '../components/mdc'
import { copyAndModifyArgs } from './helpers.js'

const args = {
  class: '', //only works for global classes
  numeric: false,
  colspan: 1,
  lowContrast: false,
}
</script>

<Meta tags={['autodocs']} title="Atoms/Datatable.Data.Row.Item" component={Datatable.Data.Row.Item} />

<Template let:args>
  <Datatable.Data.Row.Item {...args}>42</Datatable.Data.Row.Item>
</Template>

<Story name="Default" {args} />

<Story name="Numeric" args={copyAndModifyArgs(args, { numeric: 'true' })} />

<Story name="LowContrast" args={copyAndModifyArgs(args, { lowContrast: 'true' })} />

<Story name="Colspan 1" args={copyAndModifyArgs(args, { colspan: 1 })} />
