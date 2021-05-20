# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Changed
- package.json version to 1.10.1 

### Added
- actions, isAboveMobile, isAboveTablet, setNotice to index.js so they can be imported directly
- README: Theming, Drawer example and Storybook url.
- Storybook for showcasing components at https://silinternational.github.io/ui-components/

### Fixed
- README: import from '@silintl/ui-components' not 'ui-components'

## [1.0.1] - 2021-05-18
### Changed
- updated package-lock.json
- installation instructions in README.md. Now install with npm: `npm i @silintl/ui-components`

## [1.0.0] - 2021-05-18
### Added
- package.json and package-lock.json
- ./random/index.js to generate random IDs for some components
- components - for use in svelte projects based on material design
- index.js to expose components
- README to provide basic installation, configuration, examples and usage instructions
- global.css for styling components and using as utilities in the dependent
- peerDependencies: @roxi/routify, material-components-web, svelte
