# Nullstack Types

<img src='https://raw.githubusercontent.com/nullstack/nullstack/master/nullstack.png' height='60' alt='Nullstack' />

Typing files including framework docs and some examples of uses (e.g. [Context](https://nullstack.app/context) in Nullstack).

It can be used together with TSX files inside projects using [nullstack-to-njs](https://github.com/GuiDevloper/nullstack-to-njs).

A example project using it: [nullstack-tsx-example](https://github.com/GuiDevloper/nullstack-tsx-example).

## How to use this project

Installing it:

`npm install nullstack-types -D`

The current way to make the editor absorb it inside TS files is putting a reference on top of them:

```jsx
/// <reference types="nullstack-types"/>
```

Then a `Context` type becomes available in the file to be used or extended as follows:

![context-typing](https://github.com/GuiDevloper/nullstack-types/blob/master/assets/context-typing.png?raw=true)

## Learn more about Nullstack

[Read the documentation](https://nullstack.app/documentation)