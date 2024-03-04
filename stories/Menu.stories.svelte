<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { Menu, Button } from '../components/mdc'

let content = 'Menu Button'

const args = {
  class: 'dib relative opacity1', //for some reason the menu isn't behaving in storybook
  menuOpen: true,
  currentUrl: '/?path=/story/atoms-menu--primary',
  menuItems: [
    {
      subtitle: 'Alerts',
    },
    {
      icon: 'notifications',
      label: 'Alerts',
      action: () => alert('Hello!'),
      url: '/?path=/story/atoms-menu--primary',
    },
    {
      icon: 'settings',
      label: 'User settings',
      url: '/',
    },
    {
      icon: 'logout',
      label: 'Sign out',
      url: '/',
    },
  ],
  toggleMenu() {
    console.log(this.menuOpen)
    this.menuOpen = !this.menuOpen
  },
}
</script>

<Meta tags={['autodocs']} title="Atoms/Menu" component={Menu} {args} />

<Template let:args>
  <Button class="mdc-menu-surface--anchor" on:click={args.toggleMenu}>{content}</Button>
  <Menu {...args} />
</Template>

<Story name="Primary" {args} />
