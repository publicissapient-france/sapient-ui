<p align="center">
    <img width="150" alt="Publicis Sapient Engineering" src="https://blog.engineering.publicissapient.fr/wp-content/themes/wp-xebiafr-2020.v1.0/images/LOGO-publicis-sapient.svg">
</p>

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)  

| Project         | Package                                                                     | Version                                             | 
| --------------- | --------------------------------------------------------------------------- | --------------------------------------------------- |
| Core            | [`@sapient-ui/core`](https://www.npmjs.com/package/@sapient-ui/core)        | [![npm][npm-badge-core]][npm-badge-core-url]        | 
| React Adapter   | [`@sapient-ui/react`](https://www.npmjs.com/package/@sapient-ui/react)      | [![npm][npm-badge-react]][npm-badge-react-url]      |

[npm-badge-core]: https://img.shields.io/npm/v/@sapient-ui/core.svg
[npm-badge-core-url]: https://www.npmjs.com/package/@sapient-ui/core
[npm-badge-react]: https://img.shields.io/npm/v/@sapient-ui/react.svg
[npm-badge-react-url]: https://www.npmjs.com/package/@sapient-ui/react

# Sapient UI Library

Web components library for Sapient Design System. 

It's built on top of [Stenciljs](https://stenciljs.com/).

## Installation

Install dependencies and link module with:

```bash
yarn install
```

Note: [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces) will create symlinks for all modules listed in property `workspaces` of root `package.json`.

## Usage

### Folders structure

This library is split in different packages:

- [examples](https://github.com/xebia-france/sapient-ui/tree/master/examples): some example apps that use the components
- [packages/](https://github.com/xebia-france/sapient-ui/tree/master/packages)
    - [core](https://github.com/xebia-france/sapient-ui/tree/master/packages/core): the stencil project where web components implementation lives
    - [react](https://github.com/xebia-france/sapient-ui/tree/master/packages/react): the react project wrapper

### Build

To get started, you should build all library modules that are define in `packages/`.

With this command in root folder:

```bash
yarn build:all
```

or if you want to edit the code in watch mode:

```bash
yarn build:all:watch
```

In that case it should be more readable to run each module in different terminal.

### Deploy Storybook 📖
Storybook is deployed using Firebase Hosting.

```bash
yarn deploy
```

To test deployment locally you must log the CLI into Firebase with `npx firebase login`
after being added to the corresponding Firebase projects (see `.firebaserc` file to see project names).

### Try your components

There are many ways to try your components.

#### In Stencil Sandbox

You can use any component in `packages/core/src/index.html`. In that case, you should run stencil server like this:

```bash
cd packages/core
yarn start
```

Note: Hot reload is not working very well in this mode, alternatively you can refresh your browser's tab.

#### In React App example

You can edit the code in `examples/react-app` as you want and run it with:

```bash
cd examples/react-app
yarn start
```

This app already depends on `@sapient-ui/core` and `@sapient-ui/react`.

#### Other ways

Feel free to imagine another way, what about:

- Create a Vue app ?
- Create an Angular app ?
- And so on 

### Storybook

```bash
cd packages/core
yarn build:watch
yarn storybook
```

## Contributing

Let's make a branch and submit a [PR](https://github.com/xebia-france/sapient-ui/pulls). Don't hesitate to notify `#pod-web-components` to let others know 😉.

Enjoy 🥳.
