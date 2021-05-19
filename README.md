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

### Components
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

TopAppBar (dense, fixed, navIconBreakpointClass) [
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

### Importing Components
After installation and bundler configuration all of the components are ready to be imported.

Here is an example of importing Button and Card:

```
<script>
  import { Button, Card } from '@silintl/ui-components'

	// ...
</script>

<Card class="mb-1">
	<p>This is a card.</p>

	<span slot="actions">
		<Button on:click={doSomething} >Click here!</Button>
	</span>
</Card>
```
### Theming
If you are using an MDC theme https://material.io/develop/web/docs/theming and typography https://material.io/develop/web/components/typography then import your _index.scss file to the App.svelte file so they get applied to the ui-components.

### Examples
Here is a demo app with more examples of how to use components.
https://github.com/hobbitronics/svelte-ui-components-app

It was buit from https://github.com/sveltejs/template

### Storybook
Check out our components at https://silinternational.github.io/ui-components/