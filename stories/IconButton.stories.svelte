<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { IconButton } from '../components/mdc'
import { copyAndModifyArgs } from './helpers'

const args = {
  icon: 'done',
  ariaLabel: 'ariaLabel',
  class: '', //will only work with global class
  url: '',
  disabled: false,
  'on:click': () => alert('click'),
}
</script>

<Meta title="Atoms/IconButton" component={IconButton} />

<Template let:args>
  <IconButton {...args} on:click={args['on:click']} />
</Template>

<Story name="Primary" {args} />

<Story name="Url" args={copyAndModifyArgs(args, { url: '/' })} />

<Story name="Target" args={copyAndModifyArgs(args, { target: '_blank' })} />

<Story name="Disabled" args={copyAndModifyArgs(args, { disabled: true })} />
