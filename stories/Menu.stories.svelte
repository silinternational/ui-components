<script>
import { Menu, Button } from '../index.mjs'
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'

let content = 'Menu Button'

const args = {
  class: 'dib relative opacity1', //for some reason the menu isn't behaving in storybook
  menuOpen: true,
  menuItems: [
    {
      subtitle: 'Alerts',
    },
    {
      icon: 'notifications',
      label: 'Alerts',
      action: () => alert('Hello!'),
    },
    {
      icon: 'settings',
      label: 'User settings',
      url: '/household/settings',
    },
    {
      icon: 'logout',
      label: 'Sign out',
      url: '/logout',
    },
  ],
  toggleMenu() {
    console.log(this.menuOpen)
    this.menuOpen = !this.menuOpen
  },
}
</script>

<Meta title="Atoms/Menu" component={Menu} {args} />

<Template let:args>
  <Button class="mdc-menu-surface--anchor" on:click={args.toggleMenu}>{content}</Button>
  <Menu {...args} />
</Template>

<Story name="Primary" {args} />
