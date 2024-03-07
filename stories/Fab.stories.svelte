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

<Meta tags={['autodocs']} title="Atoms/Fab" component={Fab} />

<Template let:args>
  <Fab {...args} />
</Template>

<Story name="Default" {args} />
<Story name="Mini" args={copyAndModifyArgs(args, { mini: true })} />
<Story name="Extended" args={copyAndModifyArgs(args, { extended: true })} />
<Story name="Action" args={copyAndModifyArgs(args, { action: () => alert('This is an action') })} />
<Story name="Target" args={copyAndModifyArgs(args, { target: '_blank', url: '/?path=/story/atoms-fab--target' })} />
<Story name="Url" args={copyAndModifyArgs(args, { url: '/?path=/story/atoms-fab--url' })} />
