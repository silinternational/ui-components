<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import { Drawer } from "../components/mdc"
  import { copyAndModifyArgs } from "./helpers.js"

  const args = {
    class: '', //only works for global classes
    title: 'Title',
    menuItems: [
      {},
			{
				url: './',
        icon: 'account_circle',
				label: 'see our components in storybook'
			},
      {
        label: '--break--',
      },
			{
				url: './',
				label: 'see our components in storybook'
			},
      {
				url: './',
				label: 'see our components in storybook'
			},
      {
        label: '--break--',
      },
			{
				url: './',
				label: 'see our components in storybook'
			}
		]
  }
</script>

<Meta
  title="Atoms/Drawer"
  component={Drawer}
/>

<Template let:args>
  <body>
    <Drawer {...args}>
      <span class="pointer" slot="header">
        <img class="w-100" src="/logo.png" alt="logo">
      </span>
    </Drawer>
  </body>
</Template>

<Story
  name="Default"
  {args}
/>

<Story
  name="Subtitle"
  args={copyAndModifyArgs(args, {subtitle: 'subtitle'})}
/>