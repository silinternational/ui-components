import preprocess from 'svelte-preprocess'
/** @type { import('@storybook/svelte-webpack5').StorybookConfig } */

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
    // "@storybook/addon-postcss"
  ],

  framework: {
    name: '@storybook/svelte-webpack5',
    options: {
      "emitCss": true,
      "preprocess": preprocess()
  },
},
  docs: {
    autodocs: 'tag',
  },
}
export default config
