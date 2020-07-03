# react-i18n

An tiny, i18n library for React JS. It makes use of the `Context` API to support a hierarchy of language bundles (each of which can be loaded on demand) and the native `Intl` package to provide some formatting utilities for common things like dates and currencies. You can easily include anything else as and when you need to.

[Compare on Bundlephobia](https://bundlephobia.com/result?p=@mpkelly/react-i18n@0.0.4)

### Install

`npm i @mpkelly/react-i18n`

### Demos

- [Code splitting / general demo](https://codesandbox.io/s/loving-buck-jo6p6?file=/src/index.tsx)

### Features

- [x] Tiny, treeshakable bundle - 1.4kB gzipped
- [x] Clean code. No special components that take over your code base.
- [x] Hierarchical with support for dynamic imports and code splitting
- [x] Extensible/customizable Markdown support: converts text values into `ReactNode` array.
- [x] Supports dates, currencies and pluralization via native `Intl` package
- [x] Extend your design system components easily using `withI18N()` HOC.
- [x] Includes React hook `useI18N`.
- [ ] Docs
- [ ] Tests

### Quick Start

```TypeScript

```

### API
