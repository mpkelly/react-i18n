# react-i18n

An tiny, i18n library for React JS. It makes use of the `Context` API to support a hierarchy of language bundles (each of which can be loaded on demand) and the native `Intl` package to provide some formatting utilities for common things like dates and currencies. You can easily include anything else as and when you need to.

A tiny bundle size is nice but makes this library also makes it easy for you to distribute your language text across many files and is setup for code splitting and dynamic imports. This is illustrated by the [exmaple project](https://github.com/mpkelly/react-i18n/tree/master/packages/react-i18n-examples) which is hosted [here](https://mpkelly.github.io/react-i18n). 

[Compare on Bundlephobia](https://bundlephobia.com/result?p=@mpkelly/react-i18n@0.0.4)

### Install

`npm i @mpkelly/react-i18n`

### Demos

- [Code splitting / general demo](https://codesandbox.io/s/loving-buck-jo6p6?file=/src/index.tsx)

### Features

- [x] Tiny, treeshakable bundle - 1.4kB gzipped
- [x] Clean code. No special components that take over your code base
- [x] Hierarchical with support for dynamic imports and code splitting
- [x] Extensible/customizable Markdown support: converts text values into `ReactNode` array
- [x] Supports dates, currencies and pluralization via native `Intl` package
- [x] Extend your design system components easily using `withI18N()` HOC
- [x] Includes React hook `useI18N`
- [ ] Docs
- [x] Tests

### Quick Start

```TypeScript

```

### API
