# ui-components
Reusable Svelte components for some internal applications

### installation
To install to your Svelte project, open your project's root directory in a terminal. Type `npm i @silintl/ui-components` and press enter.

### bundler configuration
Your Svelte project will need the bundler (rollup most likely) configured to compile Sass files. If you are using rollup your plugins in your "rollup.config.js" should look something like this taking special note of postcss and svelte (it may work still without autoPreprocess):
```
import postcss from 'rollup-plugin-postcss';
import autoPreprocess from 'svelte-preprocess';

// ...

module.exports = {
  // ...
  plugins: [
    // ...
		svelte({
			dev: !production,
			emitCss: true, // give component style to postcss() for processing
			preprocess: autoPreprocess(),
		}),
		resolve({
			browser: true,
			dedupe: ['svelte'],
		}),
		commonjs(),
		json(),
		postcss({
			extract: true, // create a css file alongside the output.file
			sourceMap: production,
			use: {
				sass: {
					includePaths: ['node_modules']
				}
			},
		}),
		routify({}),
		dotenv(),
		// ...
```

### components
A list of all components (subcomponents and js files for interfacing in []) followed by their properties in ():

Button (disabled, outlined, raised, prependIcon, appendIcon, url)

Card (secondary, outlined, color)

Checkbox (label, checked, disabled, uppercase)

Datatable (label) [
	Datatable.Data, Datatable.Data.Row, Datatable.Data.Row.Item, Datatable.Header, Datatable.Header.Item
]

Dialog [
	Dialog.Alert (open, title, defaultAction), Dialog.Simple(open, title)
]

Drawer (title, subtitle, menuItems, toggle, modal, dismissible, hasTopAppBar)

Fab (icon, label, url)

IconButton (icon, ariaLabel)

List (twoLine, avatar) [
	List.Item (activated, graphicURL, graphicAlt, icon, meta, primary, secondary, text, withDivider, nonInteractive, tabindex), List.Divider
]

Progress [
	Progress.Circular, Progress.Linear (indeterminate, value)
]

Select (options, width, disabled, selectedID)

Snackbar [
	notice.js
]

TabBar [
	TabBar.Scroller, TabBar.Tab (active, label)
]

TextArea (label, value, placeholder, rows, maxlength, autofocus, rtl)

TextField (label, value, placeholder, maxlength, autofocus, disabled)

Tooltip (tooltipID, positionX, positionY) [
	Tooltip.Wrapper (ariaDescribedBy)
]

TopAppBar (dense, fixed, navIconBreakpointClass, bgColorIsVariant) [
	actions.js, title.js
]

Badge (color)

CustomCard (
	src, alt, title, icon, disabled, buttons, footerText
)

Form

Page (loading, title, layout, center, noProgress) [
	Page.Subheader
]

StaticChip

Tour (steps, data)

### importing components
After installation and bundler configuration all of the components are ready to be imported.

Just include `import { Button } from '@silintl/ui-components'` in your script section to import Button and any other components you want to use.

### examples
Here is a demo app with examples of how to use components.
https://github.com/hobbitronics/svelte-ui-components-app

It was buit from https://github.com/sveltejs/template

If you are building a single page app with routify then it is recommended to use this template https://github.com/roxiness/routify-starter

An example of using Button and Card:
```
<script>
  import { Button, Card } from '@silintl/ui-components'

	// ...
</script>

<Card class="mb-1">
	<p>This is a card.</p>

	<span slot="actions">
		<Button raised prependIcon="done" on:click={doSomething} >Click here!</Button>
	</span>
</Card>
```

An example of using Drawer:
```
<script>
  import { actions, Drawer } from '@silintl/ui-components'
	// ...
	$: menuItems = [
			// ...
			{},
			{
				label: '--break--',
			},
			{},
			{
				url: 'https://silinternational.github.io/ui-components/index.html?path=/story/atoms-button--primary',
				label: 'see our components in storybook'
			}
		]

		onMount(() => {
			//actions are for TopAppBar which Drawer uses as a child.
			$actions = [
				{
					icon: 'info_outline',
					label: 'action demo',
					onClick: () => alert('you clicked an action'),
				},
			]
		})
</script>

<Drawer {menuItems} title={appName}>
	<span class="pointer" on:click={() => $goto('./someUrl')} slot="header">
		<img class="w-100" src="" alt="logo">
	</span>
	<slot />
</Drawer>
```

### storybook
Try out our components at https://silinternational.github.io/ui-components/
or run storybook locally. Just copy this repo to your machine and run `npm install` then `npm run dev.` Storybook should open a browser window when it finishes building.

### CSS utility classes
Classes from [global.scss](https://github.com/silinternational/ui-components/blob/develop/components/global.scss) can be applied to all components and even components and elements from your app.

### theming
If you are using an [MDC theme](https://material.io/develop/web/docs/theming) and [typography](https://material.io/develop/web/components/typography) then import your _index.scss file to the App.svelte file so they get applied to the ui-components.