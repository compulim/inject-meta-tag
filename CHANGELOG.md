# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

| Icon | Description                                                    |
| ---- | -------------------------------------------------------------- |
| 👷🏻   | Related to development experience and non-production impacting |

## [Unreleased]

### Changed

- 👷🏻 Test framework moved from Jest to Node.js test runner, by [@compulim](https://github.com/compulim) in PR [#28](https://github.com/compulim/inject-meta-tag/pull/28)

## [0.1.0] - 2025-12-24

### Changed

- 💢 Moved build tools from Babel to tsup/esbuild
- Bumped dependencies, in PR [#10](https://github.com/compulim/inject-meta-tag/pull/10), and [#13](https://github.com/compulim/inject-meta-tag/pull/13)
   - Development dependencies
      - [`@babel/preset-env@7.24.7`](https://npmjs.com/package/@babel/preset-env/v/7.24.7)
      - [`@babel/preset-react@7.24.7`](https://npmjs.com/package/@babel/preset-react/v/7.24.7)
      - [`@babel/preset-typescript@7.24.7`](https://npmjs.com/package/@babel/preset-typescript/v/7.24.7)
      - [`@tsconfig/recommended@1.0.6`](https://npmjs.com/package/@tsconfig/recommended/v/1.0.6)
      - [`@tsconfig/strictest@2.0.5`](https://npmjs.com/package/@tsconfig/strictest/v/2.0.5)
      - [`@types/node@20.14.9`](https://npmjs.com/package/@types/node/v/20.14.9)
      - [`esbuild@0.21.5`](https://npmjs.com/package/esbuild/v/0.21.5)
      - [`prettier@3.3.2`](https://npmjs.com/package/prettier/v/3.3.2)
      - [`tsup@8.1.0`](https://npmjs.com/package/tsup/v/8.1.0)
      - [`typescript@5.5.2`](https://npmjs.com/package/typescript/v/5.5.2)
- Added [ESLint import/export syntax](https://npmjs.com/package/eslint-plugin-import), in PR [#15](https://github.com/compulim/inject-meta-tag/pull/15)
- Added [`publint`](https://npmjs.com/package/publint), in PR [#15](https://github.com/compulim/inject-meta-tag/pull/15)
- Bumped dependencies, in PR [#19](https://github.com/compulim/inject-meta-tag/pull/19)
  - Development dependencies
    - [`@babel/preset-env@7.25.8`](https://npmjs.com/package/@babel/preset-env/v/7.25.8)
    - [`@babel/preset-react@7.25.7`](https://npmjs.com/package/@babel/preset-react/v/7.25.7)
    - [`@babel/preset-typescript@7.25.7`](https://npmjs.com/package/@babel/preset-typescript/v/7.25.7)
    - [`@tsconfig/recommended@1.0.7`](https://npmjs.com/package/@tsconfig/recommended/v/1.0.7)
    - [`@types/jest@29.5.13`](https://npmjs.com/package/@types/jest/v/29.5.13)
    - [`@types/node@22.7.5`](https://npmjs.com/package/@types/node/v/22.7.5)
    - [`@typescript-eslint/eslint-plugin@8.8.1`](https://npmjs.com/package/@typescript-eslint/eslint-plugin/v/8.8.1)
    - [`@typescript-eslint/parser@8.8.1`](https://npmjs.com/package/@typescript-eslint/parser/v/8.8.1)
    - [`esbuild@0.24.0`](https://npmjs.com/package/esbuild/v/0.24.0)
    - [`eslint@9.12.0`](https://npmjs.com/package/eslint/v/9.12.0)
    - [`eslint-plugin-prettier@5.2.1`](https://npmjs.com/package/eslint-plugin-prettier/v/5.2.1)
    - [`eslint-plugin-react@7.37.1`](https://npmjs.com/package/eslint-plugin-react/v/7.37.1)
    - [`prettier@3.3.3`](https://npmjs.com/package/prettier/v/3.3.3)
    - [`tsup@8.3.0`](https://npmjs.com/package/tsup/v/8.3.0)
    - [`typescript@5.6.3`](https://npmjs.com/package/typescript/v/5.6.3)
- Bumped dependencies, in PR [#24](https://github.com/compulim/inject-meta-tag/pull/24)
  - Development dependencies
    - [`@babel/preset-env@7.28.5`](https://npmjs.com/package/@babel/preset-env/v/7.28.5)
    - [`@babel/preset-react@7.28.5`](https://npmjs.com/package/@babel/preset-react/v/7.28.5)
    - [`@babel/preset-typescript@7.28.5`](https://npmjs.com/package/@babel/preset-typescript/v/7.28.5)
    - [`@jest/globals@30.2.0`](https://npmjs.com/package/@jest/globals/v/30.2.0)
    - [`@tsconfig/recommended@1.0.13`](https://npmjs.com/package/@tsconfig/recommended/v/1.0.13)
    - [`@tsconfig/strictest@2.0.8`](https://npmjs.com/package/@tsconfig/strictest/v/2.0.8)
    - [`@types/jest@30.0.0`](https://npmjs.com/package/@types/jest/v/30.0.0)
    - [`@types/node@25.0.3`](https://npmjs.com/package/@types/node/v/25.0.3)
    - [`@typescript-eslint/eslint-plugin@8.50.1`](https://npmjs.com/package/@typescript-eslint/eslint-plugin/v/8.50.1)
    - [`@typescript-eslint/parser@8.50.1`](https://npmjs.com/package/@typescript-eslint/parser/v/8.50.1)
    - [`esbuild@0.27.2`](https://npmjs.com/package/esbuild/v/0.27.2)
    - [`eslint@9.39.2`](https://npmjs.com/package/eslint/v/9.39.2)
    - [`eslint-plugin-import@2.32.0`](https://npmjs.com/package/eslint-plugin-import/v/2.32.0)
    - [`eslint-plugin-prettier@5.5.4`](https://npmjs.com/package/eslint-plugin-prettier/v/5.5.4)
    - [`eslint-plugin-react@7.37.5`](https://npmjs.com/package/eslint-plugin-react/v/7.37.5)
    - [`jest@30.2.0`](https://npmjs.com/package/jest/v/30.2.0)
    - [`jest-environment-jsdom@30.2.0`](https://npmjs.com/package/jest-environment-jsdom/v/30.2.0)
    - [`prettier@3.7.4`](https://npmjs.com/package/prettier/v/3.7.4)
    - [`publint@0.3.16`](https://npmjs.com/package/publint/v/0.3.16)
    - [`tsup@8.5.1`](https://npmjs.com/package/tsup/v/8.5.1)
    - [`typescript@5.9.3`](https://npmjs.com/package/typescript/v/5.9.3)

## [0.0.1] - 2024-03-31

### Added

- First public release

### Changed

- Updated pull request validation to test against various React versions, in PR [#2](https://github.com/compulim/inject-meta-tag/pull/2)
   - Moved from JSX Runtime to JSX Classic to support testing against React 16

[Unreleased]: https://github.com/compulim/inject-meta/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/compulim/inject-meta/compare/v0.0.1...v0.1.0
[0.0.1]: https://github.com/compulim/inject-meta/releases/tag/v0.0.1
