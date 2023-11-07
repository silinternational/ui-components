<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { Switch, setNotice, Snackbar } from '../'

const args = {
  class: '',
  'on:selected': () => setNotice('switch is on'),
  'on:deselected': () => setNotice('switch is off'),
  'on:click': () => setNotice('click'),
}
</script>

<Meta title="Atoms/Switch" component={Switch} />

<Template let:args>
  <Switch
    {...args}
    on:selected={args['on:selected']}
    on:deselected={args['on:deselected']}
    on:click={args['on:click']}
  />
</Template>

<Story name="Primary" {args} />

<Story name="Label" args={{ ...args, label: 'ON/OFF' }} />

<Story name="Disabled" args={{ ...args, disabled: true }} />

<Story name="Initially Selected" args={{ ...args, selected: true }} />

<Snackbar/>
