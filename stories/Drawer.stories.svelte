<script>
  import { Page } from "../"
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import { Drawer } from "../components/mdc"
  import { copyAndModifyArgs } from "./helpers.js"
  import './_index.scss'

  const args = {
    class: '', //only works for global classes
    title: 'Title',
    menuItems: [
      {},
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
  <Drawer {...args}>
    <span class="pointer" slot="header">
      <img class="w-100" src="/logo.png" alt="logo">
    </span>

    <Page title="title" layout="grid">
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <p>
          Here is where you put your page content.
        </p>
      </div>
    </Page>
  </Drawer>
</Template>

<Story
  name="Default"
  {args}
/>

<Story
  name="Subtitle"
  args={copyAndModifyArgs(args, {subtitle: 'subtitle'})}
/>