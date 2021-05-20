const path = require('path')

module.exports = {
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
    "@storybook/preset-scss",
    "@storybook/addon-postcss"
  ],
  "svelteOptions": {
    "emitCss": true,
    "preprocess": require("svelte-preprocess")()
  },
  "core": {
    "builder": "webpack5"
  },
  babel: async (options) => {
    options.presets[0][1].loose = true
    return options
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.resolve.fallback.crypto = false;
    config.resolve.alias.svelte = path.resolve('node_modules', 'svelte')

    // config.module.rules[0].use[0].options.presets[0][1].loose = true
    // console.log('!!!!!!!!!!!!', JSON.stringify(config.module.rules[0].use[0].options, null, 4))
    //  = [
    //     '@babel/plugin-proposal-class-properties',
    //     { loose: true }
    // ]

    return config;
  },
}