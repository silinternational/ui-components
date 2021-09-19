<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import { Menu } from "../components/mdc"

  let content = 'Button slot'

  const args = {
    menuOpen: true,
    menuItems: [
      {
        icon: 'settings', label: 'User settings', url: '/household/settings'
      },
      {
        icon: 'logout', label: 'Sign out', url: '/logout'
      }
    ]
  }

</script>

<Meta
  title="Atoms/Menu"
  component={Menu}
  args={args}
/>

<Template let:args>
  <Menu {...args}>
    {content}
  </Menu>
</Template>

<Story
  name="Primary"
  {args}
/>

