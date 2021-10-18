<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { Drawer, Button } from '../components/mdc'
import { copyAndModifyArgs } from './helpers.js'

const args = {
  class: '', //only works for global classes
  title: 'Title',
  toggle: true,
  menuItems: [
    {},
    {
      url: './',
      icon: 'account_circle',
      label: 'account',
      tooltip: 'user account',
    },
    {
      url: './',
      icon: 'face',
      label: 'bio',
    },
    {
      url: './',
      icon: 'add',
      label: 'add stuff',
      tooltip: 'add things',
    },
    {
      url: './',
      icon: 'remove',
      label: 'remove stuff',
      tooltip: 'remove things',
    },
    {
      url: './',
      icon: 'money',
      label: 'reload',
      button: true,
    },
  ],
}
</script>

<Meta title="Molecule/Drawer" component={Drawer} />

<Template let:args>
  <body>
    <Drawer {...args}>
      <span class="pointer" slot="header">
        <img class="w-100" src="/logo.png" alt="logo" />
        <Button on:click={() => (args.toggle = !args.toggle)}>Toggle drawer</Button>
      </span>

      <Button on:click={() => (args.toggle = !args.toggle)}>Toggle drawer</Button>
    </Drawer>
  </body>
</Template>

<Story name="Default" {args} />

<Story name="Subtitle" args={copyAndModifyArgs(args, { subtitle: 'subtitle' })} />

<Story name="Dismissible" args={copyAndModifyArgs(args, { dismissible: true })} />

<Story name="HideForTablets" args={copyAndModifyArgs(args, { hideForTablet: true, modal: true })} />

<Story name="hideForPhonesOnly" args={copyAndModifyArgs(args, { hideForPhonesOnly: true, modal: true })} />

<Story name="miniMenu" args={copyAndModifyArgs(args, { miniMenu: true })} />
