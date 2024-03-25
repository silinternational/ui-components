# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html), enforced with [semantic-release](https://github.com/semantic-release/semantic-release).

## [11.0.0](https://github.com/silinternational/ui-components/compare/v10.7.0...v10.8.0) (2024-03-20)

### ⚠ BREAKING CHANGES

- **core:** updated from svelte 3 to svelte 4. Consumers should use svelte 4 although svelte 3 might still work

### Added

- **core:** update to svelte 4, storybook 7, sass to 1.77.x ([c58d599](https://github.com/silinternational/ui-components/commit/c58d599107458f4ad174b44de27beb2b2875890a))

## [10.7.0](https://github.com/silinternational/ui-components/compare/v10.6.0...v10.7.0) (2024-01-23)

### Security

- **dependencies:** add deepfactor and move svelte, sass and material to dependencies ([8ac3b5a](https://github.com/silinternational/ui-components/commit/8ac3b5a0019806b261fbeeb00809cb835c166e50))

### Fixed

- **dependencies:** remove sass from peerDependencies ([c973f25](https://github.com/silinternational/ui-components/commit/c973f2549a10cde99b95f37c3f997dc3ed6552a7))

### Added

- **Checkbox:** add inputID as prop to Checkbox ([4f9e0ea](https://github.com/silinternational/ui-components/commit/4f9e0ea60cad064277521fa49bbaae38c1f10eee))
- **StaticChip:** add height prop, improve defaults styles, width expands with content. styles overridable ([1cbdaba](https://github.com/silinternational/ui-components/commit/1cbdaba84b86dae4667196b8caa6080c6a9e43b4))

## [10.6.0](https://github.com/silinternational/ui-components/compare/v10.5.0...v10.6.0) (2023-10-25)

### Added

- **types:** Add and improve JSDOC types to props ([0f8a51f](https://github.com/silinternational/ui-components/commit/0f8a51f960a319716a87c28094c1be5bb8de2694))

### Fixed

- **Select:** Only dispatch `populated` event when appropriate ([8624b08](https://github.com/silinternational/ui-components/commit/8624b08494b210e559e27daf743bb9cb34694154))
- **types:** Add missing items type to Alert.Simple ([1193e03](https://github.com/silinternational/ui-components/commit/1193e0351ebbdcbbff699dbd07f4a1bddeea05f2))

## [10.5.0](https://github.com/silinternational/ui-components/compare/v10.4.0...v10.5.0) (2023-10-12)

### Added

- **MoneyInput:** description in helper text like TextField ([b9d4b7d](https://github.com/silinternational/ui-components/commit/b9d4b7d3629e44316e5e682e36cfbe9512f0f629))
- **SearchableSelect:** expose on:focus ([60667e0](https://github.com/silinternational/ui-components/commit/60667e04abd5a7fd7fd33a8f7ef5a3928bba8864))

### Fixed

- **SearchableSelect:** let consumer clear input ([885a8bd](https://github.com/silinternational/ui-components/commit/885a8bdc4ded967ccc520050f835c46aa101b1cc))
- **TextField:** add missing type for icon prop ([9ac0c6a](https://github.com/silinternational/ui-components/commit/9ac0c6a59be72d19cda78b19e51557fe44c5de48))

# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html), enforced with [semantic-release](https://github.com/semantic-release/semantic-release).

## [10.4.0](https://github.com/silinternational/ui-components/compare/v10.3.0...v10.4.0) (2023-09-15)

### Added

- **DataTable:** add lowContrast prop to DataRowItem ([bf1bbef](https://github.com/silinternational/ui-components/commit/bf1bbef33a7514b5300440d2e142474e3ed40eae))

## [10.3.0](https://github.com/silinternational/ui-components/compare/v10.2.0...v10.3.0) (2023-08-30)

### Added

- **release:** trigger v10.3.0 release ([196c716](https://github.com/silinternational/ui-components/commit/196c716c6e15b52fb57c8f58f0969bde3c347edd))
- **TextField:** Add all fields to default Storybook story ([96965f5](https://github.com/silinternational/ui-components/commit/96965f5f7943d60799f34513757fdb22604e2ed4))
- **TextField:** Add Description as helper text ([2e22040](https://github.com/silinternational/ui-components/commit/2e22040057815a9e2a107e13bb088a2f57337179))
- **TextField:** Description as helper text ([b6fd540](https://github.com/silinternational/ui-components/commit/b6fd540164d4f10d370a320d6c2416149d607eeb))
- **TextField:** Description as helper text ([5d017c3](https://github.com/silinternational/ui-components/commit/5d017c38530af6124169d2eecf8b158d9282fc56))

## [10.2.0](https://github.com/silinternational/ui-components/compare/v10.1.1...v10.2.0) (2023-05-16)

### Added

- **docs:** Update contribution section [release skip] ([ae8ae0c](https://github.com/silinternational/ui-components/commit/ae8ae0cb7672503fafec3565495babc2a24f95c8))
- **TextArea:** Add input event dispatch to TextArea ([c10f29f](https://github.com/silinternational/ui-components/commit/c10f29fe59c6acb88f595a969b285e221a4bbe9b))
- **TextField:** Add input event dispatch to TextField ([951221e](https://github.com/silinternational/ui-components/commit/951221ebf40aa0c7a33ff5cc741df0e3cf28ad3d))

### [10.1.1](https://github.com/silinternational/ui-components/compare/v10.1.0...v10.1.1) (2023-03-30)

### Fixed

- **components:** fix undefined appearing in class ([51a6d28](https://github.com/silinternational/ui-components/commit/51a6d28a3c7f4bf7af05578082d89ffc56d8c255))

## [10.1.0](https://github.com/silinternational/ui-components/compare/v10.0.1...v10.1.0) (2023-03-29)

### Added

- **DatatableCheckbox:** Add class prop ([1959e3d](https://github.com/silinternational/ui-components/commit/1959e3d05792606a2c60a6d6e0a1f50d97ce3510))
- **DatatableCheckboxHeader:** Add prop class ([8618a4f](https://github.com/silinternational/ui-components/commit/8618a4f156965fd67febf61516d7c814ed01b149))
- **Divider:** Add class prop ([ae03e35](https://github.com/silinternational/ui-components/commit/ae03e35f4c3c9314b9be4813bae28fcfba30494e))
- **List.Item:** Add class prop ([bfd35c1](https://github.com/silinternational/ui-components/commit/bfd35c1e5c90df30aa9f84317795ff24ebe63863))
- **Subheader:** Add class prop ([af9990a](https://github.com/silinternational/ui-components/commit/af9990a46abeef3f884d1ae82ef2c5c6755b9a9c))
- **Switch:** Add class prop ([4ca247d](https://github.com/silinternational/ui-components/commit/4ca247dfc807d7ff4835b00a45ad4c6b92b533ca))
- **TabBar.Indicator:** Add class prop ([f60bf46](https://github.com/silinternational/ui-components/commit/f60bf4628ddf52ed179e26c1e462f23e48995702))
- **TabBar.Scroller:** Add class prop ([1f4e7d5](https://github.com/silinternational/ui-components/commit/1f4e7d527c772b5a3d25611ae0b04d7eac3a7168))
- **TabBar.Tab:** add class prop ([9ca980f](https://github.com/silinternational/ui-components/commit/9ca980fc4f0a6aad36563b34e74109a46b7347d1))
- **TopAppBar:** Add class prop ([077363e](https://github.com/silinternational/ui-components/commit/077363e18ac9b3c5ddd0577ed254a2df952da152))

### Changed

- **release-config:** use conventionalcommits and custom release rules and notes with semantic release ([3537856](https://github.com/silinternational/ui-components/commit/3537856be3d599a89a6b054039c3965eb09b9c19))
- **types:** update index.d.ts types ([edd3f87](https://github.com/silinternational/ui-components/commit/edd3f870f81da61a60bf9bc41b133a48cbd57abe))

## [10.0.1](https://github.com/silinternational/ui-components/compare/v10.0.0...v10.0.1) (2023-03-23)

### Fixed

- **exports:** fix broken DateInput export ([d841278](https://github.com/silinternational/ui-components/commit/d84127837248d2581b424b2fa1f36ce4f4f5f11a))

# [10.0.0](https://github.com/silinternational/ui-components/compare/v9.1.1...v10.0.0) (2023-03-23)

### Fixed

- **types:** fix Select and MoneyInput types ([f2c6f73](https://github.com/silinternational/ui-components/commit/f2c6f73b289d0277b99a5e51cba8778fbd49ddd8))
- **types:** JSX.HTMLAttributes is deprecated ([f8c593b](https://github.com/silinternational/ui-components/commit/f8c593b91528ecf47c5fffd8652bd5bc357b70f3))

### Added

- **components:** Add DateInput components ([a83dc70](https://github.com/silinternational/ui-components/commit/a83dc7079d70a26fa1b2800b0fb909719e52ae8d))

### BREAKING CHANGES

### Removed

- **Form:** remove success prop ([5f3537c](https://github.com/silinternational/ui-components/commit/5f3537c6fa8a41891d1f36a1f5ac3a697bf9fdbc))

To reset `Form` use `on:submit` and `event.target.reset()` instead of setting `success` to `true`

## [9.1.1](https://github.com/silinternational/ui-components/compare/v9.1.0...v9.1.1) (2023-02-22)

### Fixed

- **TextArea:** fix text overlapping with counter ([c0bb58e](https://github.com/silinternational/ui-components/commit/c0bb58ef45a8d8ec83bf13bf16f89fedd0442e82))

# [9.1.0](https://github.com/silinternational/ui-components/compare/v9.0.0...v9.1.0) (2023-02-22)

### Added

- **Components:** add target prop to Button, Fab, and IconButton ([d0e92bc](https://github.com/silinternational/ui-components/commit/d0e92bc6b052ad20ca2379dd26cfde2e7aff0f55))

# [9.0.0](https://github.com/silinternational/ui-components/compare/v8.1.0...v9.0.0) (2023-02-08)

### Fixed

- **Menu:** fix ssr for Menu using window ([e4b0b03](https://github.com/silinternational/ui-components/commit/e4b0b03fc6f2f9c9587008f826b5d6b3cdc0343f))

### Added

- **Menu:** remove window & add currentUrl to props ([1e982ad](https://github.com/silinternational/ui-components/commit/1e982ade89b81e8a5a8e89e7c880e9e6d7a0efd3))

### Removed

- **Menu:** remove focus of menuItem based on path. Add currentUrl story ([b0aca32](https://github.com/silinternational/ui-components/commit/b0aca3233d4c0aa0bbfa1df1830da44ff6ef72d9))

### BREAKING CHANGES

- **Menu:** remove checking of current path to focus menu item

# [8.1.0](https://github.com/silinternational/ui-components/compare/v8.0.1...v8.1.0) (2022-12-12)

### Deprecated

- **Form:** deprecate success and listen for reset to clear local storage ([38fad25](https://github.com/silinternational/ui-components/commit/38fad257bbb3056ea9132ba6f370d8d724d841fe))

### Changed

- **Form:** listen for reset to clear local storage ([38fad25](https://github.com/silinternational/ui-components/commit/38fad257bbb3056ea9132ba6f370d8d724d841fe))

## [8.0.1](https://github.com/silinternational/ui-components/compare/v8.0.0...v8.0.1) (2022-12-03)

### Fixed

- **components:** resolve A11y warning in that show up in rollup-plugin-svelte ([42229e2](https://github.com/silinternational/ui-components/commit/42229e2a047cf71ce526eb0db582757a845f0b7e))

# [8.0.0](https://github.com/silinternational/ui-components/compare/v7.0.0...v8.0.0) (2022-12-01)

### Fixed

- **peerDependencies:** update material-components-web and sass to match devDependencies. Fixes an npm error for consumers using material and sass. ([7d929fd](https://github.com/silinternational/ui-components/commit/7d929fd82f9f08983c167c6595e4aaaf0b58215e))

### Changed

- **peerDependencies:** update peerDependencies ([a524f48](https://github.com/silinternational/ui-components/commit/a524f4845e85e05c379b24593ca49312d6abebef))

### BREAKING CHANGES

- **peerDependencies:** update peerDependencies

Change material-components-web to 14 and sass to 1.55. If installed in your project you can now update them to these versions without an error or warning.

# [7.0.0](https://github.com/silinternational/ui-components/compare/v6.7.0...v7.0.0) (2022-11-07)

### Changed

- **dependencies:** update multiple deps ([4553e7f](https://github.com/silinternational/ui-components/commit/4553e7fcbe97003fa776bacd5ae2f17c5700f9ad))

### Added

- **Form:** change Form children top margin ([0ca845f](https://github.com/silinternational/ui-components/commit/0ca845fb8ec115d25d91dec6caa6b01e2052e6f1))

### BREAKING CHANGES

- **dependencies:** update material-components-web to 15 and sass to 1.55
- **Form:** Form children will now have 1rem instead of 2rem

# [6.7.0](https://github.com/silinternational/ui-components/compare/v6.6.0...v6.7.0) (2022-10-05)

### Fixed

- **Form:** don't remove storage when restoring form values ([44ba3a9](https://github.com/silinternational/ui-components/commit/44ba3a9e2834f6687115441b05a1b87dd688d8a2))

### Added

- **Form:** add success prop so Form can remove stored values internally ([8aedd72](https://github.com/silinternational/ui-components/commit/8aedd726d267ce5ce806a8f82b2bd4331f39da96))

# [6.6.0](https://github.com/silinternational/ui-components/compare/v6.5.0...v6.6.0) (2022-10-04)

### Added

- **components:** add name prop to MoneyInput, TextArea and TextField ([142b27e](https://github.com/silinternational/ui-components/commit/142b27e41751e635a4ef02745074c619fde10571))
- **Form:** add id and saveToLocalStorage props to Form ([8216ae1](https://github.com/silinternational/ui-components/commit/8216ae10e82834ab7f3b1f0a775c12172daa171c))

# [6.5.0](https://github.com/silinternational/ui-components/compare/v6.4.2...v6.5.0) (2022-09-26)

### Added

- **SearchableSelect:** add required prop ([053af32](https://github.com/silinternational/ui-components/commit/053af32385578630d8253f5feee9cf5097baa2ab))

## [6.4.2](https://github.com/silinternational/ui-components/compare/v6.4.1...v6.4.2) (2022-08-24)

### Fixed

- **types:** fix Scroller type warning ([d867aa0](https://github.com/silinternational/ui-components/commit/d867aa0c95bc63fbd23172c61c44ab6840cc8762))

## [6.4.1](https://github.com/silinternational/ui-components/compare/v6.4.0...v6.4.1) (2022-08-24)

### Fixed

- **types:** Add Scroller and Tab to TabBar type ([dd08278](https://github.com/silinternational/ui-components/commit/dd0827884c38da7137c4831882f533e1269c1df1))

# [6.4.0](https://github.com/silinternational/ui-components/compare/v6.3.0...v6.4.0) (2022-08-18)

### Added

- **components:** add type support ([c2abfbc](https://github.com/silinternational/ui-components/commit/c2abfbc22f37e9ac9c724fdf81d237a204d6c9fa))

# [6.3.0](https://github.com/silinternational/ui-components/compare/v6.2.0...v6.3.0) (2022-07-26)

### Added

- **components:** Add FileDropArea ([475fbd9](https://github.com/silinternational/ui-components/commit/475fbd9787e1ca49e447535f5097fc065d3c39b4))

# [6.2.0](https://github.com/silinternational/ui-components/compare/v6.1.1...v6.2.0) (2022-07-05)

### Changed

- **Datatable:** expose DataRow rowId as slot prop ([46aa49c](https://github.com/silinternational/ui-components/commit/46aa49c114aecf241a2fb91745986c17e76528a8))

### Fixed

- **Datatable:** fix exception when using checkbox ([f4d3433](https://github.com/silinternational/ui-components/commit/f4d34338c9b3c5fb757eaee12a44707f89a8203f))

### Added

- **components:** add DatatableCheckbox and DatatableCheckboxHeader ([5c2da10](https://github.com/silinternational/ui-components/commit/5c2da10e8fe7e53b5b1e31531887c98dfa6a9560))
- **Datatable:** add numberOfCheckboxes to register new Checkboxes ([01aa5d0](https://github.com/silinternational/ui-components/commit/01aa5d0e146216aa88d99b1a1dcd32f0e30f1881))

## [6.1.1](https://github.com/silinternational/ui-components/compare/v6.1.0...v6.1.1) (2022-06-23)

### Fixed

- **index.mjs:** Switch was not exported ([b3bb6ac](https://github.com/silinternational/ui-components/commit/b3bb6ac203c84eaed6b52dbe24a76042a1883f72))

# [6.1.0](https://github.com/silinternational/ui-components/compare/v6.0.1...v6.1.0) (2022-06-16)

### Added

- **components:** add Switch story ([8889e11](https://github.com/silinternational/ui-components/commit/8889e1197edad4ddaeae767a2508533f5cb220b4))

## [6.0.1](https://github.com/silinternational/ui-components/compare/v6.0.0...v6.0.1) (2022-05-23)

### Fixed

- **Drawer:** fix find and replace typo ([11943d3](https://github.com/silinternational/ui-components/commit/11943d33bfd41a2e94f37afe58a825a63d7e29d0))

# [6.0.0](https://github.com/silinternational/ui-components/compare/v5.1.1...v6.0.0) (2022-04-28)

### Fixed

- **Dialog:** fix Alert titleIcon position ([be8bac7](https://github.com/silinternational/ui-components/commit/be8bac77c3b69cf82859bb2b5247bce168b7784f))
- **MoneyInput:** fix 1x10e-n not being caught by step ([84a6cef](https://github.com/silinternational/ui-components/commit/84a6cefac85b34865283b4880c6ece0267ad41c6))
- **Select:** fix floating label color ([12d120d](https://github.com/silinternational/ui-components/commit/12d120da7f8095a55de976a1a391260777c19cba))

### Changed

- **deps:** update material-components-web and sass ([6e44b76](https://github.com/silinternational/ui-components/commit/6e44b7644e28083646bcaaedc9dbfedaf0f978b4))

- **Diaolog.Alert:** expose titleIcon color to --mdc-theme-icon-color ([f8c9ad0](https://github.com/silinternational/ui-components/commit/f8c9ad0c6c82872896baf6898488ee56aab901cb))

### Added

- **components:** add SearchableSelect ([2de1351](https://github.com/silinternational/ui-components/commit/2de13515ac43d56a63ee0ed3092b01a146a689c4))

### BREAKING CHANGES

- **deps:** Consumer must install sass@1.50.x and material-components-web@13. See https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md

## [5.1.1](https://github.com/silinternational/ui-components/compare/v5.1.0...v5.1.1) (2022-04-04)

### Fixed

- **imports:** fix circular dependency warnings ([81ca49f](https://github.com/silinternational/ui-components/commit/81ca49f171988be3882c78404d6a2b77f6c3c2d4))
- **MoneyInput:** fix valueNotDivisibleByStep for most values ([d38c333](https://github.com/silinternational/ui-components/commit/d38c3335a42d04e764404718029ace1647212a21))

# [5.1.0](https://github.com/silinternational/ui-components/compare/v5.0.1...v5.1.0) (2022-03-12)

### Added

- **Tooltip:** add class prop to Wrapper ([38a9669](https://github.com/silinternational/ui-components/commit/38a9669cabc56804e78fc0a8869e12a1f53fb587))

## [5.0.1](https://github.com/silinternational/ui-components/compare/v5.0.0...v5.0.1) (2022-03-04)

### Fixed

- **MoneyInput:** fix step bug when 2.01 is entered ([10b8f9c](https://github.com/silinternational/ui-components/commit/10b8f9c79d03640ebf3ce4f161c8a105be042f7d))

# [5.0.0](https://github.com/silinternational/ui-components/compare/v4.1.0...v5.0.0) (2022-02-24)

### Fixed

- **Drawer:** use element to listen for closed ([111d0e4](https://github.com/silinternational/ui-components/commit/111d0e463d2525cd466960513717c13f3913ac7d))
- **icons:** icons not loading in sveltekit SSR ([bfa8e19](https://github.com/silinternational/ui-components/commit/bfa8e19c72ab9b522c30cb7daa410a889991f942))
- **index:** use index.mjs as entry point ([f4aec84](https://github.com/silinternational/ui-components/commit/f4aec84275a4015c1a2d913ef5de618f5a35021c))

### Removed

- **icons:** remove autoloading material icons ([e3c0483](https://github.com/silinternational/ui-components/commit/e3c0483c0a69a6859146c03834f07233d9b09edd))

### BREAKING CHANGES

- **icons:** consumer now imports icons. see README.

# [4.1.0](https://github.com/silinternational/ui-components/compare/v4.0.0...v4.1.0) (2022-02-21)

### Added

- **Dialog.Alert:** add titleIcon prop ([13a9c41](https://github.com/silinternational/ui-components/commit/13a9c41280de3cce064d8a94db1a10be8268c5f1))
- **Dialog.Alert:** allow modal to close itself ([d4df8e8](https://github.com/silinternational/ui-components/commit/d4df8e826f813f9c9a148fc5bfe1966466cf3822))
- **Menu:** add subtitle to menuItems prop as splitters ([b23fab6](https://github.com/silinternational/ui-components/commit/b23fab6e349ad9c1fd8a397ee6cf54463db6d0b0))

# [4.0.0](https://github.com/silinternational/ui-components/compare/v3.12.1...v4.0.0) (2022-02-17)

### Fixed

- **Tour:** resolve a11y warnings ([f4e3132](https://github.com/silinternational/ui-components/commit/f4e31324311ec3ec1b97678c9769168d045ec7f5))

### Added

- **Drawer:** add currentUrl prop and remove roxi ([c38dfac](https://github.com/silinternational/ui-components/commit/c38dfac0f96e1c9ad243244c00f9db9d4353b327))
- **IconButton:** add url and disabled props ([fba3e6b](https://github.com/silinternational/ui-components/commit/fba3e6bc13ab69fc199b35cda09b06206747669a))

### Removed

- **Drawer:** remove beforeUrlChange ([2247b8c](https://github.com/silinternational/ui-components/commit/2247b8c4bfb2164605a9159cbf3ed75e1aff1471))

### BREAKING CHANGES

- **Drawer:** The consumer must update the currentUrl as a prop

## [3.12.1](https://github.com/silinternational/ui-components/compare/v3.12.0...v3.12.1) (2022-02-17)

### Fixed

- **deps:** add sass to peerDependencies ([08b09de](https://github.com/silinternational/ui-components/commit/08b09de76f7c281cf684f5f7a9da3544aaefffee))

# [3.12.0](https://github.com/silinternational/ui-components/compare/v3.11.0...v3.12.0) (2022-02-14)

### Added

- **TextInput:** add description property ([a215a58](https://github.com/silinternational/ui-components/commit/a215a58e37d3bf57f2fdfc642c02adf5371dcb12))
- **TextInput:** add description story ([a75efd6](https://github.com/silinternational/ui-components/commit/a75efd6e296aebdd4ba4514481ad07f5a688d8e1))
- **utils:** add quarter/half margin & padding ([feeb42f](https://github.com/silinternational/ui-components/commit/feeb42f96d1d078cd914c61be41d196216fdc124))

# [3.11.0](https://github.com/silinternational/ui-components/compare/v3.10.6...v3.11.0) (2022-02-10)

### Changed

- **Button:** expose radius and outline color ([90b7fd1](https://github.com/silinternational/ui-components/commit/90b7fd1c0db231f605599a8fe493a8dbd0bd27b1))
- **TextField:** expose radius var to consumer ([3757b15](https://github.com/silinternational/ui-components/commit/3757b15380d13655ed593e365e53e1473c677660))

## [3.10.6](https://github.com/silinternational/ui-components/compare/v3.10.5...v3.10.6) (2022-01-13)

### Fixed

- **Drawer:** fix a11y warning ([3394ec3](https://github.com/silinternational/ui-components/commit/3394ec34e0fa535b761932d3be3b90dd574e4f73))

## [3.10.5](https://github.com/silinternational/ui-components/compare/v3.10.4...v3.10.5) (2022-01-06)

### Fixed

- **DataTable:** sort button should be on left side of numeric HeaderItem ([4376c56](https://github.com/silinternational/ui-components/commit/4376c567b53178ff868b242ac183b8bc2cd42c7f))

## [3.10.4](https://github.com/silinternational/ui-components/compare/v3.10.3...v3.10.4) (2022-01-03)

### Fixed

- **TextInputs:** fix circular dependencies ([cb73f9c](https://github.com/silinternational/ui-components/commit/cb73f9cebb1cb97ea054c599627c91f724ffaf41))

## [3.10.3](https://github.com/silinternational/ui-components/compare/v3.10.2...v3.10.3) (2021-12-22)

### Fixed

- **MoneyInput:** fix value two way binding ([7bbf8a5](https://github.com/silinternational/ui-components/commit/7bbf8a529b3abb04f5e548c6ff322823610445b1))
- **TextInput:** fix offsetWidth error on undefined ([5d2ca72](https://github.com/silinternational/ui-components/commit/5d2ca72c73470a55351a397ef480451f0ef257d7))

## [3.10.2](https://github.com/silinternational/ui-components/compare/v3.10.1...v3.10.2) (2021-12-22)

### Fixed

- **MoneyInput:** forgot to add MoneyInput to index ([fceb8e0](https://github.com/silinternational/ui-components/commit/fceb8e093461123f000c32905b26756635263b23))
- **Textinput:** fix error on reading 'remove' ([1a209f9](https://github.com/silinternational/ui-components/commit/1a209f976abadaf9e5e8f6e543648278c75c1937))

## [3.10.1](https://github.com/silinternational/ui-components/compare/v3.10.0...v3.10.1) (2021-12-21)

### Fixed

- **MoneyInput:** fix MoneyInput staying red ([2adc91c](https://github.com/silinternational/ui-components/commit/2adc91c73076af2a99c324a0b3b20b5c645ac343))

# [3.10.0](https://github.com/silinternational/ui-components/compare/v3.9.0...v3.10.0) (2021-12-21)

### Fixed

- **MoneyInput:** fix label color for required ([dc9c3ba](https://github.com/silinternational/ui-components/commit/dc9c3ba6dcb273906974252eaf041f9bdcdf4976))
- **MoneyInput:** remove error state on:focus for required ([3e6c2f5](https://github.com/silinternational/ui-components/commit/3e6c2f5f70ce3b26fb46d0dbd32bb16e566ce6f8))
- **TextInput:** label not turning red for required ([b9d924a](https://github.com/silinternational/ui-components/commit/b9d924aaf13d7879c7a8bc96c40a0f54362e277e))
- **TextInput:** Show \*Required initially and change backup color ([b84548a](https://github.com/silinternational/ui-components/commit/b84548aed92d97fc0d3ace431866f2101acee5fd))
- **TextInput:** show appropriate icons/colors ([925a6ac](https://github.com/silinternational/ui-components/commit/925a6accd712b09c7abb29fda3e042b6e5785bf7))

### Added

- **TextArea:** add required prop and story ([6045274](https://github.com/silinternational/ui-components/commit/60452747c39381f07efae67e9caf36e29ebdbd13))

# [3.9.0](https://github.com/silinternational/ui-components/compare/v3.8.0...v3.9.0) (2021-12-20)

### Fixed

- **TextArea:** typo and counter rendering "524288" ([94992b6](https://github.com/silinternational/ui-components/commit/94992b6485bd3931317ea3be9ee23d929ab28ca8))
- **TextField:** \*Required was hidden until focused ([d320bca](https://github.com/silinternational/ui-components/commit/d320bca567cf5af0c390eb8d0b15cc4eb22ecf93))
- **TextField:** allow value to be > maxlengh ([c09def6](https://github.com/silinternational/ui-components/commit/c09def60f1a58948691668bcaf3ae54311cbc936))

### Added

- **components:** add MoneyInput and story ([021d291](https://github.com/silinternational/ui-components/commit/021d2912e355de327153983f3c961624d5bbd7e6))
- **MoneyInput:** add counter & icon on maxlength ([d22bda8](https://github.com/silinternational/ui-components/commit/d22bda8eb9889ec56c1b608ee08ffbaedf8c0f02))
- **MoneyInput:** add maxlength warning, fix width ([6ce6458](https://github.com/silinternational/ui-components/commit/6ce6458111a987d4fa7f53d3f33a0bfb4500972b))
- **MoneyInput:** add step, maxValue, minValue and helper text ([db5de95](https://github.com/silinternational/ui-components/commit/db5de959513fd1542fbb759a3f5c093efa9402af))
- **TextArea:** allow value > maxlength & add warning ([6151b60](https://github.com/silinternational/ui-components/commit/6151b60883aa9e7354eb8bd42d567aa2eea1b00f))
- **TextField:** add character counter ([eba6321](https://github.com/silinternational/ui-components/commit/eba6321dbd260d9e06deb88536706e29dbd406d1))
- **TextField:** Add icon prop ([568f659](https://github.com/silinternational/ui-components/commit/568f6596feda14d1617a890e4ecd5ce6618837ce))
- **TextField:** add maxlength warning, fix width ([67b145a](https://github.com/silinternational/ui-components/commit/67b145affb014b5c1ac978201be4bccd060490bd))
- **TextField:** make outline red on maxlength ([44b52dc](https://github.com/silinternational/ui-components/commit/44b52dcca5df813c11a1429541a4dd1a4ca35bd8))
- **textinput:** use error color on counter and label for maxlength ([364ddba](https://github.com/silinternational/ui-components/commit/364ddbacfab8cab8c1fc388f14ba71fa50f6070c))
- **utils:** add min, max, height and width utils ([5d737f3](https://github.com/silinternational/ui-components/commit/5d737f3d6200dce6e81f65be42cdbba9f5f584e3))
- **utils:** change margin and padding up to 50px ([fa3aa85](https://github.com/silinternational/ui-components/commit/fa3aa85d1099b43be47669d19135dfc363345736))

### Changed

- **TextArea:** make outline red on maxlength ([70d3920](https://github.com/silinternational/ui-components/commit/70d3920def943c3fea47a9b1cde7d113118793c2))

# [3.8.0](https://github.com/silinternational/ui-components/compare/v3.7.0...v3.8.0) (2021-12-13)

### Added

- **Page:** add $$props.class ([d292cf1](https://github.com/silinternational/ui-components/commit/d292cf13b1f091b39eb607fdb23cdd5fd69c8419))
- **TextField:** add required field option ([2b594ae](https://github.com/silinternational/ui-components/commit/2b594ae8c0fde5ba509270d17be962484a4a89ca))

### Changed

- **Page:** unset height ([d292cf1](https://github.com/silinternational/ui-components/commit/d292cf13b1f091b39eb607fdb23cdd5fd69c8419))

- **Drawer:** use var to set main content height ([79c4a51](https://github.com/silinternational/ui-components/commit/79c4a51e77ffc2596f146b234fb959d910bdd882))

# [3.7.0](https://github.com/silinternational/ui-components/compare/v3.6.0...v3.7.0) (2021-11-22)

### Added

- **Drawer:** add url pattern matching ([4ad5821](https://github.com/silinternational/ui-components/commit/4ad5821d72a6eee282c0f3d2cf8529b1a54e9531))

# [3.6.0](https://github.com/silinternational/ui-components/compare/v3.5.0...v3.6.0) (2021-11-05)

### Added

- **TextField:** add keydown, keypress, and keyup events ([da1b1bd](https://github.com/silinternational/ui-components/commit/da1b1bd46782514b23a795bad12d11b049057be8))

# [3.5.0](https://github.com/silinternational/ui-components/compare/v3.4.0...v3.5.0) (2021-10-19)

### Added

- **Drawer:** Add optional content slot above menu in Drawer ([6aa7ddb](https://github.com/silinternational/ui-components/commit/6aa7ddb98b11a97e19fd9fb0139ab1f9d9ee22bd))

# [3.4.0](https://github.com/silinternational/ui-components/compare/v3.3.0...v3.4.0) (2021-10-18)

### Fixed

- **Datatable:** Fix text-alignment in numeric Datatable cells ([8f733da](https://github.com/silinternational/ui-components/commit/8f733da8c46a059bfd7a98c40d82f94f9ce30366))

### Added

- **Drawer:** Add support for tooltips on menu items ([27cd6f9](https://github.com/silinternational/ui-components/commit/27cd6f92e5de773054989cabbc3b2a272f59a801))

# [3.3.0](https://github.com/silinternational/ui-components/compare/v3.2.0...v3.3.0) (2021-10-13)

### Added

- **Menu:** add support for actions in MenuItems ([ce271f2](https://github.com/silinternational/ui-components/commit/ce271f22d444bfc6bb9e5e73605eb0079eca76c9))

### Removed

- **TextInput:** remove Noto Sans ([3591a21](https://github.com/silinternational/ui-components/commit/3591a214ae96b722b0c1945676fe2a5df1e7ef74))

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
