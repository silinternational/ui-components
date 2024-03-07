/** @type { import('@storybook/svelte-vite').StorybookConfig } */
const config = {
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-svelte-csf",
    "@storybook/preset-scss",
    "@storybook/addon-mdx-gfm",
  ],

  framework: {
    name: '@storybook/svelte-vite',
    options: {
      emitCss: true,
    },
},
  docs: {
    autodocs: 'tag',
  },
}
export default config
