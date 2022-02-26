<div align="center">
  <br />
  <p>
    <a href="https://www.npmjs.com/package/wiki-for-discord"><img src="https://i.imgur.com/kI8Ga6d.png" width="546" alt="wiki-for-discord" /></a>
  </p>
  <br />
  <p>
    <a href="https://github.com/ItzAshu397/Wiki-For-Discord"><img src="https://img.shields.io/github/languages/code-size/ItzAshu397/Wiki-For-Discord?style=flat" alt="code size" /></a>
    <a href="https://patreon.com/ashutoshswamy"><img src="https://img.shields.io/badge/Patreon-Donate%20Us-orange?style=flat" alt="code size" /></a>
    <a href="https://www.instagram.com/itzashu397/"><img alt="instagram" title="Instagram" src="https://img.shields.io/badge/-ItzAshu397's%20Instagram-E1306C?style=flat"/></a>
  </p>
</div>

# Wiki For Discord

wiki-for-discord is a NPM package which helps in getting Wikipedia data on a certain term in Discord itself.

# How to install this package?

```sh
npm i wiki-for-discord
```

# Changes Made

- Made minor changes in `index.js` file

# Example

```js
const wiki = require("wiki-for-discord");

let query = "hydrogen";

const response = new wiki.WikiForDiscord({
  query: query,
  color: "BLURPLE",
  message: message,
});

response.fetch();
```

# Donate us so we can Improve

- Patreon - [Click Here](https://patreon.com/ashutoshswamy)
