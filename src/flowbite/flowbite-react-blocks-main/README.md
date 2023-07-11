# :construction: flowbite-react-blocks :construction:

**Please note: Flowbite Blocks in React are currently still being developed and released. Early users can expect many of the Blocks found on [the Flowbite website]() to be unavailable in React. There isn't a fixed release schedule right now.**

## What are Flowbite Blocks?

Blocks are UI components that you can copy-and-paste effortlessly into any [Node.js](https://nodejs.org) project with [flowbite](https://github.com/themesberg/flowbite). You can clone the repository if you like, but in most cases you can just view the files you want directly on `github.com`.

These components are specifically designed for [React](https://reactjs.org). Almost all of the Blocks also use [`flowbite-react`](https://github.com/themesberg/flowbite-react).

## How do I use Flowbite Blocks?

You just need a [Node.js](https://nodejs.org) project with `flowbite-react` installed. Setting up a React project is beyond the scope here, but we included [a development server](#local-development) if you'd like to look at it.

To set up the current repository install the dependencies using `yarn install` and then start a local development server using `yarn dev`.

The Blocks are in `.tsx` the following folders, which correspond to the categories found on [the Flowbite Blocks website](https://flowbite.com/blocks/):

- `application-ui/*.tsx`
- `marketing-ui/*.tsx`
- `publisher-ui/*.tsx`

Components are written in TypeScript. Each component is its own file. Some components require interactive React elements via, e.g. `useState`, but not all.

Files in each folder mirror the components on [the Flowbite Blocks website](https://flowbite.com/blocks/). For example, you'll find the `Default hero section` under `marketing-ui/hero-sections/default-hero-section`.

## How do I fix, `<Dropdown> not defined`, etc.?

Almost all of the Blocks depend on [`flowbite-react`](https://github.com/themesberg/flowbite-react).

If you are using [Visual Studio Code](https://code.visualstudio.com/), the editor should suggest `import` statements to you from the `flowbite-react` library.

If you aren't, you'll have to copy `import` statements from `flowbite-react` in addition to the React JSX components.

## Local development

We also included a development server using [`vite`](https://vitejs.dev). There's a [live version ready to view](), and you can also run it yourself locally via `yarn dev`.
