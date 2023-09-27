# Employee Report

## About this Kata

https://codingdojo.org/kata/Employee-Report/

This Kata was developed to show how overspecification of assertions harms maintainability of tests. A blog post with a possible solution can be found here: https://dev.to/webpapaya/writing-better-test-assertions-lml

## Problem Description

You’re building an employee management system of a local grocery store. The shop-owner wants to open the shop on Sunday and due to legal restrictions employees younger than 18 years are not allowed to work Sundays. The employee asks for a reporting feature so she can schedule work shifts. All employees are already stored somewhere and have the following properties:

name: string (the name of the employee)
age: number (the age in years of the employee)

```js
const employees = [
  { name: 'Max', age: 17 },
  { name: 'Sepp', age: 18 },
  { name: 'Nina', age: 15 },
  { name: 'Mike', age: 51 },
];
```

## Rules

Start with the first user-story and write at least one test for every requirement. Try not to look on future requirements upfront and follow the TDD-Cycle strictly.

As shop owner I want to view a list of all employees who are 18 years or older so that I know who is allowed to work on Sundays.
As shop owner I want the list of employees to be sorted by their name, so I can find employees easier.
As shop owner I want the list of employees to be capitalized, so I can read it better.
As shop owner I want the employees to be sorted by their names descending instead of ascending.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

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

### Type-Check, Compile and Minify for Production

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
