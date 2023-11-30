# ✌️🔗🧭 doubly-linked-list-navigator

A TypeScript library extending the [doubly-linked-list](https://github.com/rfieve/doubly-linked-list) with navigation.

## Table of Content

-   [✌️🔗🧭 doubly-linked-list-navigator](#️-doubly-linked-list-navigator)
    -   [Table of Content](#table-of-content)
    -   [Installation](#installation)
    -   [Usage](#usage)

## Installation

```sh
yarn add @romainfieve/doubly-linked-list-navigator
```

or

```sh
npm install @romainfieve/doubly-linked-list-navigator
```

## Usage

```typescript
const arr = [10, 32, 13, 2, 89, 5, 50];
const compare = (a: number, b: number) => a - b;

const dllNav = new DoubleLinkedListNavigator(arr, compare);

// Schema of "dllNav"
// 2 <-> 5 <-> 10 <-> 13 <-> 32 <-> 50 <-> 89

dllNav
    .goTo(13) // .current.data === 13
    .go(2) // .current.data === 50
    .go(-2); // .current.data === 13
    .goPrev() // .current.data === 10
    .goNext() // .current.data === 13
    .goTail() // .current.data === 89
    .goHead() // .current.data === 2
    .goAt(1) // .current.data === 5
    .current // { data: 5, next: ...}
```

---
