<p align="center">
  <a target="_blank" href="https://react.flatifycss.com/">
    <img src="https://raw.githubusercontent.com/amir2mi/flatifycss/master/website/static/img/logo.gif" alt="React FlatifyCSS" width="160" height="160">
  </a>
</p>

<h3 align="center">React FlatifyCSS</h3>

<p align="center">
   A collection of React flat design components, based on FlatifyCSS.
</p>

<p align="center">
  <a target="_blank" href="https://react.flatifycss.com/">
    Getting started
  </a>
&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;   
  <a target="_blank" href="https://react.flatifycss.com/">
    Homepage
  </a>
&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;   
  <a target="_blank" href="https://github.com/amir2mi/react-flatifycss/issues">
    Issues
  </a>
</p>

<hr>

[![npm version](https://img.shields.io/npm/v/react-flatifycss)](https://www.npmjs.com/package/react-flatifycss)

# Getting stated

Start using React FlatifyCSS after installing packages and importing the style file, here is how.

## Installing packages

To install and use the library you should install both the `flatifycss` and `react-flatifycss` packages. We use the base `flatifycss` package to import styles.

Use npm or Yarn to install the packages:

### npm

```bash
npm i flatifycss react-flatifycss
```

### Yarn

```bash
yarn add flatifycss react-flatifycss
```

## Import styles

React FlatifyCSS itself does not include the FlatifyCSS styles, so you can import <a href="https://flatifycss.com/docs/intro#css" target="_blank">your prefered stylesheet</a> in your application.

<div class="funky-spacer-sm" />

### Left to right

```js
import 'flatifycss/dist/css/flatify-min.css';
```

### Right to Left

```js
import 'flatifycss/dist/css/flatify-rtl-min.css';
```

## Use components!

Now, just import the component you need from `react-flatifycss`, for example a simple button:

```js
import React from 'react';
import { Button } from 'react-flatifycss';

export default function App() {
  return <Button theme="green">Success!</Button>;
}
```
