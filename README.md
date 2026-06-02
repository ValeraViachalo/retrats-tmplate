# RETRATS Template

A clean creative-development starter on **Next.js 16** (App Router, Turbopack, React 19 + React Compiler), **Sass**, **Locomotive Scroll**, and **Motion**.

## Stack

- **Next.js 16** — App Router, Turbopack, `reactCompiler` enabled
- **Sass 1.100** — modern `@use`/`@forward`, tokens auto-injected (no manual imports)
- **Locomotive Scroll 5** — smooth scrolling (built on Lenis)
- **Motion 12** — animation + the custom progress scrollbar

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Styling system

```
src/styles/
  abstracts/        # tokens/functions/mixins — auto-injected, NO concrete rules
    _breakpoints.scss   # single source of truth for breakpoints
    _colors.scss
    _easing.scss
    _functions.scss     # EM() / VW()
    _mixins.scss        # mq() / mq-between() / hover()
    _typography.scss    # type mixins
    _index.scss         # @forward entry (this is what gets injected)
  base/             # concrete global rules, emitted ONCE
    _reset.scss
    _scaling.scss       # fluid --size-* variables
    _base.scss          # body + utility classes
  global.scss       # imported once in app/layout.js
```

Every `.scss` file gets `@use "styles/abstracts" as *;` injected automatically
(see `next.config.mjs`), so you can use `$c-text`, `EM(24)`,
`@include mq("mobile")` etc. **without importing anything**.

### Fluid scaling

Design in pixels, convert with `EM()`. Sizes scale proportionally with the
viewport between breakpoints, driven by `--size-unit` / `--size-font` in
`base/_scaling.scss`.

```scss
.title {
  font-size: EM(80); // 80px in the design → fluid
  margin-bottom: EM(24);
}
```

### Breakpoints

One map in `abstracts/_breakpoints.scss` (`small 480 / mobile 768 / tablet 1024
/ desktop 1440`), mirrored for JS in `src/lib/helpers/breakpoints.js`.

```scss
@include mq("mobile") {
  /* max-width: 768px */
}
```

## Smooth scroll

`LocomotiveScrollProvider` wraps the app in `app/layout.js`. Access it anywhere:

```jsx
import { useLocomotiveScroll } from "@/lib/providers/LocomotiveScroll/LocomotiveScroll";

const { scrollTo, start, stop, getLenis } = useLocomotiveScroll();
```

Anchor links scroll smoothly via a data attribute:

```jsx
<a data-scroll-to="#about">About</a>
<section id="about" />
```

## Project structure

```
src/
  app/            # routes, root layout, local fonts
  components/     # page-level components (HomePage, ...)
  utils/          # reusable UI (Header, Footer, Logo, Content, ScrollBar)
  lib/
    providers/    # LocomotiveScroll provider/context
    helpers/      # anim, ease, breakpoints, useMediaQuery, defaultMetadata
  styles/         # abstracts + base + global.scss
```
