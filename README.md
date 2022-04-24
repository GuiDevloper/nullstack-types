# Nullstack Types

<img src='https://raw.githubusercontent.com/nullstack/nullstack/master/nullstack.png' height='60' alt='Nullstack' />

Typing files including framework docs and some examples of uses (e.g. [Context](https://nullstack.app/context) in Nullstack).

> Nullstack framework already absorbed those types, so currently this package is just a zero-dependencies mirror with synced version.

A example project using it from Nullstack: [nullstack-tsx-example](https://github.com/GuiDevloper/nullstack-tsx-example).

## How to use this project

Installing it:

`npm install nullstack-types -D`

To make the editor absorb it inside TS files put a reference on top of them:

```jsx
/// <reference types="nullstack-types"/>

// all types can be imported too!
import type { NullstackClientContext } from 'nullstack-types';
```

## Learn more about Nullstack

[Read the documentation](https://nullstack.app/documentation)