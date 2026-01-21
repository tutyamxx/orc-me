# orc-me 👹

<p align="center">
  <img src="https://i.imgur.com/PnyuVte.png" height="50" width="50"><br/>
</p>

<p align="center">
  <a href="https://nodei.co/npm/orc-me/">
    <img src="https://nodei.co/npm/orc-me.png">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
</p>

* 👹 NPM package to generate random orc names
* ✨ Get awesome orc names for your projects!
* 👹 An orc name is created by starting with a harsh consonant sound (like `gr`, `kr`, `th`, or `sh`), followed by a short, heavy vowel (`a`, `o`, or `u`), and usually ending with another hard consonant (`g`, `k`, `r`, or `z`). Sometimes an extra harsh sound is added at the end to make the name feel more brutal.
* ⭐ Updated the version using a custom `orc phoneme grammar` to avoid hardcoded array of names.

# Install [NPM](https://www.npmjs.com/package/orc-me) 📦

 `$ npm i orc-me`

# Usage 📜

- Returns a `string` containing a random orc name

# Examples 💻

## CommonJS
``` javascript
const orcMe = require('orc-me');

const orcThreeNames = `${orcMe()} ${orcMe()} ${orcMe()}`;
const orcTwoNames = `${orcMe()} ${orcMe()}`;

console.log('Orc battle started! ⚔️');
console.log(orcThreeNames + '    ⚔️     ' + orcTwoNames);
```

# Result of the example above

<p align="center">
  <img src="https://i.imgur.com/adQxN3t.png"><br/>
</p>
