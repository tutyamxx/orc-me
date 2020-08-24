# orc-me

<p align="center">
  <img src="https://i.imgur.com/PnyuVte.png" height="50" width="50"><br/>
</p>

<p align="center"><a href="https://nodei.co/npm/orc-me/"><img src="https://nodei.co/npm/orc-me.png"></a></p>


* 👹 NPM package to generate random orc names
* See examples below

# Install [NPM](https://www.npmjs.com/package/orc-me)

 `$ npm i orc-me`

# Usage

- Returns a `string` containing a random orc name

# Examples

``` javascript
const orcMe = require("orc-me");

function capitalizeFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const OrcThreeNames = capitalizeFirstLetter(orcMe()) + " " + capitalizeFirstLetter(orcMe()) + " " + capitalizeFirstLetter(orcMe());
const OrcTwoNames = capitalizeFirstLetter(orcMe()) + " " + capitalizeFirstLetter(orcMe());

console.log("Orc battle started!");
console.log(OrcThreeNames + "    ⚔️     " + OrcTwoNames);
```

# Result of the example above

<p align="center">
  <img src="https://i.imgur.com/adQxN3t.png"><br/>
</p>
