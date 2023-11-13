# demoxchange

Live preview here [https://selardi.com/projects/demoxchange/](https://selardi.com/projects/demoxchange/)

# SHOWCASING

- Usage of [VUEX](/src/vuex/store.js)
- Usage of [VITE](/vite.config.js)
- Real time API pooling with defaulting to local mocked API when the API limits are reached
    - [Axis Mock Adapter](/src/config/fakeDbDataService.js)
- SCSS in SFC
- TS in SFC
- vue components with both composable and options API
- custom css3 / html5 loader
- advanced css3 responsive table design
- vue mixins
- composable functions
- nested components
- emitting and consuming events child-parent and parent-to-child sfc with props
- vue router
- scss mixins
- .env usage
- and more


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
