# 🛠️ J-Tilities

A lightweight, modular library of **JavaScript utility functions** designed to simplify everyday coding tasks.  
Think of it as your personal toolbox: concise, readable, and remix‑ready.

## ✨ Why Jtilities?

- **Modular utilities:** import only what you need
- **Performance‑focused:** minimal overhead, pure functions
- **Code-readability:** mnemonic‑rich, easy to remember
- **Universal:** works in Node.js and modern browsers
- **Extensible:** contributors can add new utilities with ease

## 📥 Installation

```
npm install jtilities
```

or with yarn:

```
 yarn add jtilities
```

## 🚀 Example Usages

```js
import {
  capitalize,
  randomElementFromArray,
  randomIntFromRange,
  shuffleArr,
  shuffleStr,
  sortArr
} from 'jtilities';

console.log(capitalize('heLlO')); // Hello
console.log(randomElementFromArray([1, 2, 3, 4, 5])); // 3
console.log(randomIntFromRange(1, 50)); // 26
console.log(shuffleArr([1, 2, 3, 4, 5])); // [ 2, 5, 4, 1, 3 ]
console.log(shuffleStr('bingo')); // onbgi
console.log(sortArr([4, 2, 3, 1, 5])); // [ 1, 2, 3, 4, 5 ]
```

```js
import { ellipsify } from 'jtilities';

const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit';

const ellipsified = ellipsify({ text, length: 22 });

console.log(ellipsified); // Lorem ipsum dolor sit...
```

## 🛠 Contributing

Contributions are welcome!  
Fork the repo, make your changes, and submit a pull request.  
**Make sure to read [CONTRIBUTING](./CONTRIBUTING.md) before you start.**

## 📄 License

MIT © Caleb Ephrem
