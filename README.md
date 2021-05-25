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

Drawer (title, subtitle, menuItems)

Fab (icon, label, url)

IconButton (icon, ariaLabel)

List (twoLine, avatar) [
	List.Item (activated, graphicURL, graphicAlt, icon, meta, primary, secondary, text, withDivider, nonInteractive, tabindex), List.Divider
]

Progress [
	Progress.Circular, Progress.Linear (indeterminate, value, barColorProvided)
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

### CSS utility classes
These are copied directly from globall.css and can be applied to all components and even components and elements from your app.

.h-100 {
	height: 100%;
}

.w-100 {
	width: 100%;
}
.w-50 {
	width: 50%;
}
.w-40 {
	width: 40%;
}

.mw-50ch {
	min-width: 50ch;
}

.m-0 {
	margin: 0;
}

.ml-1 {
	margin-left: 1rem;
}
.ml-2 {
	margin-left: 2rem;
}

.mb-0 {
	margin-bottom: 0;
}

.mb-1 {
	margin-bottom: 1rem;
}
.mb-2 {
	margin-bottom: 2rem;
}
.mb-4 {
	margin-bottom: 4rem;
}

.mt-0 {
	margin-top: 0;
}
.mt-1 {
	margin-top: 1rem;
}
.mt-2 {
	margin-top: 2rem;
}
.mt-4 {
	margin-top: 4rem;
}

.mr-1 {
	margin-right: 1rem;
}
.mr-2 {
	margin-right: 2rem;
}

.my-0 {
	margin-bottom: 0;
	margin-top: 0;
}
.my-2 {
	margin-bottom: 2rem;
	margin-top: 2rem;
}
.my-4 {
	margin-bottom: 4rem;
	margin-top: 4rem;
}

.p-1 {
	padding: 1rem;
}
.p-2 {
	padding: 2rem;
}
.p-4 {
	padding: 4rem;
}

.px-1 {
	padding-left: 1rem;
	padding-right: 1rem;
}
.px-2 {
	padding-left: 2rem;
	padding-right: 2rem;
}
.px-4 {
	padding-left: 4rem;
	padding-right: 4rem;
}

.py-1 {
	padding-top: 1rem;
	padding-bottom: 1rem;
}
.py-2 {
	padding-top: 2rem;
	padding-bottom: 2rem;
}
.py-4 {
	padding-top: 4rem;
	padding-bottom: 4rem;
}

.pt-1 {
	padding-top: 1rem;
}
.pt-2 {
	padding-top: 2rem;
}
.pt-4 {
	padding-top: 4rem;
}

.pr-1 {
	padding-right: 1rem;
}
.pr-2 {
	padding-right: 2rem;
}

.absolute {
	position: absolute;
}

.r-50 {
  right: 50%;
}

.t-50 {
  top: 50%;
}

.z-10 {
	z-index: 10;
}

.stick-b{
	position:fixed;
	bottom:0px;
}

.dib{
  display: inline-block;
}

.align-right {
  text-align: right;
}

.align-left {
  text-align: left;
}

.align-center {
	text-align: center;
}

.rtl {
	direction: rtl;
}

.fs-12 {
	font-size: 12px;
}

.fs-14 {
	font-size: 14px;
}

.fs-16 {
	font-size: 16px;
}

.br-8px {
	border-radius: 8px;
}

.br-16px {
	border-radius: 16px;
}

.br-50 {
	border-radius: 50%;
}

.uppercase {
	text-transform: uppercase;
}

.pointer {
	cursor: pointer;
}

/* text color */
.black {
	color: #2A3032;
}

.gray {
	color: #666666;
}

.white {
	color: white;
}

/* flex */
.flex {
	display: flex;
}

.flex-wrap {
	flex-wrap: wrap;
}

.grow-0 {
	flex-grow: 0;
}
.grow-1 {
	flex-grow: 1;
}
.grow-2 {
	flex-grow: 2;
}

.shrink-0 {
	flex-shrink: 0;
}
.shrink-1 {
	flex-shrink: 1;
}
.shrink-2 {
	flex-shrink: 2;
}

.row {
	flex-direction: row;
}

.column {
	flex-direction: column;
}

.justify-center {
	justify-content: center;
}

.justify-between {
	justify-content: space-between;
}

.justify-around {
	justify-content: space-around;
}

.justify-end {
	justify-content: flex-end;
}

.justify-start {
	justify-content: flex-start;
}

.aligned {
	align-items: center;
}


### theming
If you are using an MDC theme https://material.io/develop/web/docs/theming and typography https://material.io/develop/web/components/typography then import your _index.scss file to the App.svelte file so they get applied to the ui-components.