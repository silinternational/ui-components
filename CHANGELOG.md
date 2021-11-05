# [3.6.0](https://github.com/silinternational/ui-components/compare/v3.5.0...v3.6.0) (2021-11-05)


### Features

* **TextField:** add keydown, keypress, and keyup events ([da1b1bd](https://github.com/silinternational/ui-components/commit/da1b1bd46782514b23a795bad12d11b049057be8))

# [3.5.0](https://github.com/silinternational/ui-components/compare/v3.4.0...v3.5.0) (2021-10-19)


### Features

* **Drawer:** Add optional content slot above menu in Drawer ([6aa7ddb](https://github.com/silinternational/ui-components/commit/6aa7ddb98b11a97e19fd9fb0139ab1f9d9ee22bd))

# [3.4.0](https://github.com/silinternational/ui-components/compare/v3.3.0...v3.4.0) (2021-10-18)


### Bug Fixes

* **Datatable:** Fix text-alignment in numeric Datatable cells ([8f733da](https://github.com/silinternational/ui-components/commit/8f733da8c46a059bfd7a98c40d82f94f9ce30366))


### Features

* **Drawer:** Add support for tooltips on menu items ([27cd6f9](https://github.com/silinternational/ui-components/commit/27cd6f92e5de773054989cabbc3b2a272f59a801))

# [3.3.0](https://github.com/silinternational/ui-components/compare/v3.2.0...v3.3.0) (2021-10-13)


### Bug Fixes

* **TextInput:** remove Noto Sans ([3591a21](https://github.com/silinternational/ui-components/commit/3591a214ae96b722b0c1945676fe2a5df1e7ef74))


### Features

* **Menu:** add support for actions in MenuItems ([ce271f2](https://github.com/silinternational/ui-components/commit/ce271f22d444bfc6bb9e5e73605eb0079eca76c9))

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.2.0](https://github.com/silinternational/ui-components/releases/tag/v3.2.0) - 2021-10-01

### Added

- Menu to components
- Menu story to storybook

### Changed

- README index with Menu and default values for Dialog
- README index formatting
- Dialog story event names
- let prettier redo some formatting

## [3.1.0](https://github.com/silinternational/ui-components/releases/tag/v3.1.0) - 2021-09-01

### Added

- Dispatch 'populated' event when a Select's options are populated. Useful for
  knowing when it's safe to set the initial selectedID value.

## [3.0.1](https://github.com/silinternational/ui-components/releases/tag/v3.0.1) - 2021-09-02

### Fixed

- package.json: fix git repository url (93ac824)

### Changed

- README: update README & test new environment (6d5b5f8)

## [3.0.0](https://github.com/silinternational/ui-components/releases/tag/v3.0.0) - 2021-08-13

### Added

- mini, extended and action props to Fab
- non link variation of Fab when url prop is empty
- hideForPhonesOnly, hideForTablet, miniMenu to Drawer
- clickable to Datatable.Data.Row
- $$props.class to all Datatable sub components that didn't already have it.
- margin & padding global classes m-0px through m-25px and p-0px through p-25px
- margin & padding x (m or p)x-0px through (m or p)x-25px global classes
- margin & padding y (m or p)y-0px through (m or p)y-25px global classes
- margin & padding sides m(side)-(0 to 25)px, p(side)-(0 to 25)px global classes

### Fixed

- bug preventing standard navigation Drawer

### BREAKING CHANGES

### Removed

- hideForMobile from Drawer

### Changed

- all boolean props in Drawer are now false by default

## [2.6.0](https://github.com/silinternational/ui-components/releases/tag/v2.6.0) - 2021-08-04

### Added

- hideForMobile prop and optional border-white class in Drawer
- another slot to TopAppBar
- main-drawer-content id and actions slot to Drawer

### Fixed

- TopAppBar adjust class removed when not needed by Drawer

## [2.5.0](https://github.com/silinternational/ui-components/releases/tag/v2.5.0) - 2021-08-03

### Added

- slot to TopAppBar in Drawer

### Changed

- centered and raised menu button in Drawer

## [2.4.0](https://github.com/silinternational/ui-components/releases/tag/v2.4.0) - 2021-08-03

### Added

- capitalize to global.scss
- $$class.props and isFullHeightMenu property to Drawer
- button to menu array in Drawer

### Changed

- update README index

### Fixed

- typo in global.scss
- bug in Drawer by defaulting to modal

## [2.3.1](https://github.com/silinternational/ui-components/releases/tag/v2.3.1) - 2021-07-22

### Fixed

- package-lock.json still had sass@1.35.2. Excessive warnings from sass.

## [2.3.0](https://github.com/silinternational/ui-components/releases/tag/v2.3.0) - 2021-07-21

### Added

- borderRadius, padding and bordered props to Badge
- bgColor to StaticChip

### Changed

- README - updated component index

## [2.2.1](https://github.com/silinternational/ui-components/releases/tag/v2.2.1) - 2021-07-15

### Fixed

- Excessive warnings from sass. Reverted to 1.32.12

## [2.2.0](https://github.com/silinternational/ui-components/releases/tag/v2.2.0) - 2021-07-14

### Added

- noPadding to card

### Changed

- README - updated component index

## [2.1.0](https://github.com/silinternational/ui-components/releases/tag/v2.1.0) - 2021-07-13

### Changed

- README - updated installation instructions, bundler configuration and component index

### Added

- on:click, on:mousedown, on:mouseup, on:keypress, isClickable (prop) and tabindex to Card

### Fixed

- Events in Storybook

## [2.0.0](https://github.com/silinternational/ui-components/releases/tag/v2.0.0) - 2021-07-02

### Changed

- README - Instructions for running Storybook locally
- global.css is compiled during Storybook dev and deployment build from global.scss and used only for Storybook
- \_index.scss uses global.scss

### BREAKING CHANGES

- .align-center, .align-left and .align-right global classes are now .text-align-center, .text-align-left and .text-align-right.
- .aligned global class is now .align-items-center
- Progress.Linear barColorProvided prop deleted
- Progress.Linear uses --progress-bar-color instead of --sil-primary-blue from the apps \_theme file and falls back to --mdc-theme-primary
- TopAppBar prop bgColorIsVariant default value is now false

### Added

- $$props.class to Badge, Form, CustomCard, Tour and StaticChip so they can accept global classes
- mdc-typography class to Badge, StaticChip and Card as it was not being applied
- Badge, CustomCard, Drawer, Form, StaticChip and Tour stories to Storybook
- global.scss to generate full range of padding and margin from 1rem to 8rem, height and width from 0 to 100% in increments of 5, z-index from 0 to 10.
- align-item and align-self flex utilites to global.scss
- .text-align-start, .text-align-end, .d-inline, .d-block, .relative, .fixed and .fs-10 added to global.scss
- toggle (opens and closes Drawer when modal or dismissible), dismissible(Drawer is hidden by default) and hasTopAppBar props to Drawer

### Removed

- global.css was removed and added to .gitignore
- barColorProvided from Progress.Linear

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
