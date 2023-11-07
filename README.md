# ui-components

Reusable Svelte components for some internal applications

## installation

To install to your Svelte project, open your project's root directory in a terminal. Type or paste `npm i -D @silintl/ui-components` and press enter. Sass (depending on your bundler and plugins) and material-components-web are required to develop additional material web components in your app, but it may depend on your version of npm if they are necessary even if you don't (I haven't figured out which versions require them). Enter the commands `material-components-web@14` and `npm i -D sass@1` (versions will vary if you use an older release of this library). You should already have svelte@3 installed if you are using this library.

If you are using typescript you will need to run `npm i -D tslib` to avoid a material-components-web type error. This will already be installed if you have set up SvelteKit with typescript using `npm create svelte@latest app-name`.

You will also want to follow the example below for your index.html (app.html for sveltekit templates) for Material Icons to work and for Google fonts to load.
see https://github.com/material-components/material-web#2-write-html-and-javascript

Your index.html could look something like this

```
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Example App</title>

    <!-- Add support for Web Components to older browsers. -->
    <script src="./node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>

    <!-- Your application must load the Roboto and Material Icons fonts. -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">
  </head>
  ...
```

See `theming` and `typography` for more details on how to configure fonts and themes.

See https://google.github.io/material-design-icons/#sizing for sizing material icons.

## theming

If you are using an [MDC theme](https://material.io/develop/web/docs/theming) you may want to include a \_theme.scss file and import it into
\_index.scss.

Import \_index.scss or other file(s) that contains material styling variables like --mdc-theme-primary --mdc-theme-secondary and other root variables to the App.svelte (your base +layout.svelte in sveltekit templates) file so they get applied to the ui-components.

See https://github.com/silinternational/ui-components/blob/develop/stories/_theme.scss for exposed theme properties.

## typography

See [typography](https://material.io/develop/web/components/typography)

In your \_typography.scss or similar file include the following snippet:

```
@use '@material/typography/mdc-typography';
```

and something similar to the following:

```
:root {
  --mdc-typography-font-family: Source Sans Pro, Roboto, sans-serif;
}
```

and then import it to your sass entry point like \_index.scss. You may prefer to declare your root typography rules elsewhere (eg. index.html) which is also valid.

## bundler configuration

SvelteKit won't need a bundler as it uses Vite, but Svelte projects will need a bundler (rollup or webpack most likely) configuration. If you are using rollup your plugins in your "rollup.config.js" should look something like this taking special note of postcss and svelte:

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

## Sveltekit

Using this library in [Sveltekit](https://github.com/sveltejs/kit) is now fully supported. Below were a number of issues which may still apply if you are trying to use Vite without Svelte-kit.
https://kit.svelte.dev/faq#packages

https://vitejs.dev/guide/dep-pre-bundling.html

https://vitejs.dev/guide/features.html#npm-dependency-resolving-and-pre-bundling

https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/faq.md#what-is-going-on-with-vite-and-pre-bundling-dependencies

https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md#prebundlesveltelibraries

https://github.com/vitejs/vite/issues/2892

https://github.com/sveltejs/kit/issues/885

## components

A list of all components and their props can be found in our running instance of [Storybook](https://silinternational.github.io/ui-components/).

## importing components

After installation and bundler configuration all of the components are ready to be imported.

Just include `import { Button } from '@silintl/ui-components'` (~~Sveltekit/~~Vite only projects will need the full url: `import { Button } from '../../node_modules/@silintl/ui-components/index.mjs`
) in your script section to import Button and any other components you want to use.

## overriding default sass variables

In your main sass file just use the following pattern to override any sass variables. See https://github.com/silinternational/ui-components/blob/develop/stories/_index.scss for exposed sass variables.

`@use './components/mdc/Button' with ( $radius: 16px );`

## examples and templates

See our [Storybook](https://silinternational.github.io/ui-components/?path=/docs/example-introduction--page) for examples. Just click on the component you want to learn more about. You can also click on the "Docs" tab to right of "Canvas" in the top left of the page and then click "Show code" to see code examples. See our [Button](https://silinternational.github.io/ui-components/?path=/docs/atoms-button--primary) Docs for example.

An opinionated Svelte template using rollup https://github.com/silinternational/the-way-svelte

A template using Vite https://github.com/hobbitronics/mikes-svelte-template

A template using SvelteKit https://github.com/hobbitronics/sveltekit-ui-components

If you don't want to use Sveltekit or the templates above and are building a single page app with routify then it is recommended to use this template https://github.com/roxiness/routify-starter (this library not pre-installed)

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

Try out our components and see usage examples at https://silinternational.github.io/ui-components/.
You can also run storybook locally. Just run `git clone git@github.com:silinternational/ui-components.git` on your machine and run `npm install` then `npm run dev` in your terminal. Storybook should open a browser window when it finishes building.

## CSS utility classes

Classes from [global.scss](https://github.com/silinternational/ui-components/blob/develop/components/global.scss) can be applied to all components and even components and elements from your app. Since classes applied to Svelte components using `$$props.class` (e.g. `Button class="my-class"`) need to be global in scope these utility classes can be handy. Alternatively you can use `:global(.my-class) {...}` inside your `<style>` tags (which makes them truly global css styles so be careful!) or declare global styles elsewhere.

## contributions

All commit messages must follow the format defined in our [release.config.js file](https://github.com/silinternational/ui-components/blob/develop/release.config.js) for a release to be triggered upon merging to main. Here are basic examples:

- `add(Button): Added 'class' prop` (minor release)

- `feat(components): Add Slider component and story` (minor release)

- `fix(Button): fixed url prop not working` (patch release)

- `remove(Card): Removed secondary text padding` (major release)

  `<BLANK LINE>`

  `BREAKING CHANGE: The secondary text padding is now 0 by default. Use the secondary-text class to adjust padding as desired.`

- `change(dependencies): updated to sass 1.58` (major release)

  `<BLANK LINE>`

  `BREAKING: update sass to match this version if installed`

- `security(dependencies): updated deps with npm update` (patch release)

- `deprecate(CustomCard): Deprecated CustomCard as it will be removed` (minor release)

These will trigger a patch or minor release depending on the config. A major release can be triggered by including 'BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING' in the footer section followed by ': <description/instructions>' where <description/instructions> details what the breaking change is and/or how to migrate. If this is not done, an empty commit with the proper format can be pushed to trigger the release or by using `git rebase -i` to rewrite the commit messages. commits that contains '[skip release]' or '[release skip]' in their message will be excluded from the commit analysis and won't participate in the release type determination. See https://github.com/semantic-release/semantic-release, https://semantic-release.gitbook.io/semantic-release/support/faq and https://www.conventionalcommits.org/en/v1.0.0/#specification for more details.

Semantic Release will also update the version and the CHANGELOG based on the commit messages. Use tags/types that correspond to the release type and if you need to you can change it in the Changelog after release.
