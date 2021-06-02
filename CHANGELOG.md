# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Changed
- README - Instructions for running Storybook locally
- global.css is compiled during Storybook dev and deployment build from global.scss and used only for Storybook
- _index.scss uses global.scss

### BREAKING CHANGES
- .align-center, .align-left and .align-right global classes are now .text-align-center, .text-align-left and .text-align-right.
- .aligned global class is now .align-items-center
- Progress.Linear barColorProvided prop deleted
- Progress.Linear uses --progress-bar-color and falls back to --mdc-theme-primary instead of --sil-primary-blue from the apps _theme file
- TopAppBar prop bgColorIsVariant default value is now false

### Added
- $$props.class to Badge, Form, CustomCard, Tour and StaticChip so they can accept global classes
- Badge, CustomCard, Form, StaticChip and Tour stories to Storybook
- global.scss to generate full range of padding and margin from 1rem to 8rem, height and width from 0 to 100% in increments of 5, z-index from 0 to 10.
- align-item and align-self flex utilites to global.scss
- .text-align-start, .text-align-end, .d-inline, .d-block, .relative, .fixed and .fs-10 added to global.scss

### Removed
- global.css was removed and added to .gitignore
- Progress.Linear prop barColorProvided

### Fixed
- Tour was failing to replace key with value of data prop in steps content.

## [1.1.0](https://github.com/silinternational/ui-components/releases/tag/v1.1.0) - 2021-05-26
### Changed
- package.json version to 1.1.0

### Added
- actions, isAboveMobile, isAboveTablet, setNotice to index.js so they can be imported directly
- $$props.class to Fab, TextArea, Select, Checkbox, Datatable, Dialog.Simple, Dialog.Alert, Tooltip, Snackbar, TabBar and List so they can accept global classes
- barColorProvided to Progress.Linear to allow bypass of bar-color class when no color is provided
- bgColorIsVariant to TopAppBar to allow bypass of bg-color-variant if no color is provided
- README: Theming, Drawer example, CSS utility classes and Storybook url.
- Storybook for showcasing components at https://silinternational.github.io/ui-components/

### Fixed
- README: import from '@silintl/ui-components' not 'ui-components'

## [1.0.1](https://github.com/silinternational/ui-components/releases/tag/v1.0.1) - 2021-05-18
### Changed
- updated package-lock.json
- installation instructions in README. Now install with npm: `npm i @silintl/ui-components`

## [1.0.0](https://github.com/silinternational/ui-components/releases/tag/v1.0.0) - 2021-05-18
### Added
- package.json and package-lock.json
- ./random/index.js to generate random IDs for some components
- components - for use in svelte projects based on material design
- index.js to expose components
- README to provide basic installation, configuration, examples and usage instructions
- global.css for styling components and using as utilities in the dependent
- peerDependencies: @roxi/routify, material-components-web, svelte
