<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { Fab } from '../components/mdc'
import { copyAndModifyArgs } from './helpers'

const args = {
  icon: 'add',
  label: 'Fab',
  class: '', //will only work with global class
  action: () => console.log('click'),
}
</script>

<Meta title="Atoms/Fab" component={Fab} />

<Template let:args>
  <Fab {...args} />
</Template>

<Story name="Default" {args} />
<Story name="Mini" args={copyAndModifyArgs(args, { mini: true })} />
<Story name="Extended" args={copyAndModifyArgs(args, { extended: true })} />
