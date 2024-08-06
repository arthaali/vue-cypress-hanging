# Vue 3 + TypeScript + Vite + cypress

This is a very mini app to reproduce cypress hanging issue

the issue only happens if I have a child component that raise an error and there is another child component rendered afterwords.

there should be more than one tests to make cypress hangs. if we run one single test then cypress will fail sucessfully

## How to run
1- Install the packages: `pnpm  install`

2- Run the app `pnpm dev`
    - checking the checkbox will raise an error, you can see it in the console

3- Run the tests: `test:cy:local`
    - This will open the browser.. run the test and watch it hanging

## Requirements
- node verion: v20.15.1
- pnpm verion: 9.5.0

## Issue Report:
The issue already reported to cypress here: https://github.com/cypress-io/cypress/issues/29983