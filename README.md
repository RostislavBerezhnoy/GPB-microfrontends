# Webpack 5 Module Federation GPB Test with React/Typescript [in dev]

This project consist of four pieces, a host app `gpb_container` and three remotes `gpb_test1` `gpb_test2` `gpb_test3`.

Workflow:

- `gpb_test1` expose Test1 page.
- `gpb_test2` expose Test2 page.
- `gpb_test3` expose Test3 page.
- `gpb_container` import Test1, Test2 and Test3 pages.

## Running Demo

In order to run the demo I highly recommend installing lerna globally via

```bash
yarn global add lerna
```

Then,

```bash
yarn run lerna bootstrap
```

Run the command above at the root of your project. This command will make sure you have dependencies you need in order to run this project.

Finally,

```bash
yarn run start
```

Lerna will start all your projects parallelly and open your browser.

- http://localhost:3000/ (gpb_container)
- http://localhost:3001/ (gpb_test1)
- http://localhost:3002/ (gpb_test2)
- http://localhost:3003/ (gpb_test3)

## Tech Stack

React, Typescript, Ant Design, Webpack, Lerna, React Router V6, Redux Toolkit, Formik