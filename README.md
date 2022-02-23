# ui-components

Reusable Svelte components for some internal applications

## installation

To install to your Svelte project, open your project's root directory in a terminal. Type `npm i @silintl/ui-components --save-dev` and press enter. You may also have to run `npm i material-components-web@10.0.0  --save-dev` and possibly `npm i sass@1.32.x  --save-dev` to get sass stuff working if it doesn't work initially or you want to develop additional material web components in your app. It may depend on your version of npm if this is necessary. You should already have svelte@3 installed if you are using this library. You will also want to include the following code in your index.html for material icons to work,  `<link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" rel="stylesheet">`. See https://google.github.io/material-design-icons/#sizing for sizing material icons. See the `themeing and typography` section for importing Google Fonts.
`

## bundler configuration

Your Svelte project will need the bundler (rollup most likely) configured to compile Sass files. If you are using rollup your plugins in your "rollup.config.js" should look something like this taking special note of postcss and svelte:

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
		routify({
			dynamicImports: false, //may need this if using @roxi/routify
		}),
		dotenv(),
		// ...
```

## components

A list of all components and their props can be found in our running instance of [Storybook](https://silinternational.github.io/ui-components/).

## importing components

After installation and bundler configuration all of the components are ready to be imported.

Just include `import { Button } from '@silintl/ui-components'` in your script section to import Button and any other components you want to use.

## overriding default sass variables

In your main sass file just use the following pattern to override any sass variables. See https://github.com/silinternational/ui-components/blob/develop/stories/_index.scss for exposed sass variables.

`@use './components/mdc/Button' with (
  $radius: 16px
);`

## examples

See our Storybook [Docs](https://silinternational.github.io/ui-components/?path=/docs/example-introduction--page) for examples. Just click on the component you want to learn more about.

Here is a demo app with more examples of how to use components.
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

## storybook

Try out our components and see examples at https://silinternational.github.io/ui-components/
or run storybook locally. Just copy this repo to your machine and run `npm install` then `npm run dev` in your terminal. Storybook should open a browser window when it finishes building.

## CSS utility classes

Classes from [global.scss](https://github.com/silinternational/ui-components/blob/develop/components/global.scss) can be applied to all components and even components and elements from your app.

## theming and typography

If you are using an [MDC theme](https://material.io/develop/web/docs/theming) and [typography](https://material.io/develop/web/components/typography) then import your _index.scss or other file(s) that contains stuff like --mdc-theme-primary --mdc-theme-secondary, --mdc-typography-font-family, etc and other root variables to the App.svelte or Index.html file (unless they are in those files already) so they get applied to the ui-components. See https://github.com/silinternational/ui-components/blob/develop/stories/_theme.scss for exposed theme properties.

## contributions

All commit messages must follow [Angular Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format) for a release to be triggered upon merging to main. Here is a basic example: `feat(pencil): add 'graphiteWidth' option`. This will trigger a minor release. If this is not done, an empty commit with the proper format can be pushed to trigger the release. See https://github.com/semantic-release/semantic-release for more details. Semantic Release will also update the version and the CHANGELOG based on the commit messages.