<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import { Drawer, Button } from "../components/mdc"
  import { copyAndModifyArgs } from "./helpers.js"

  const args = {
    class: '', //only works for global classes
    title: 'Title',
    toggle: true,
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
  title="Molecule/Drawer"
  component={Drawer}
/>

<Template let:args>
  <body>
    <Drawer {...args}>
      <span class="pointer" slot="header">
        <img class="w-100" src="/logo.png" alt="logo">
        <Button on:click={() => args.toggle = !args.toggle}>Toggle drawer</Button>
      </span>

      <Button on:click={() => args.toggle = !args.toggle}>Toggle drawer</Button>

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

<Story
  name="Dismissible"
  args={copyAndModifyArgs(args, {dismissible: true})}
/>