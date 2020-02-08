# orcish

<p align="center">
  <img src="https://i.imgur.com/PnyuVte.png" height="50" width="50"><br/>
</p>


* 👹 NPM package to generate random orc names
* See examples below

# Install [NPM](https://www.npmjs.com/package/orcish)
 
 `$ npm i orcish`

# Usage 

- Returns a `string` containing a random orc name

# Examples

``` javascript
const orchish = require("orcish");

function capitalizeFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const OrcThreeNames = capitalizeFirstLetter(orchish()) + " " + capitalizeFirstLetter(orchish()) + " " + capitalizeFirstLetter(orchish());
const OrcTwoNames = capitalizeFirstLetter(orchish()) + " " + capitalizeFirstLetter(orchish());

console.log("Orc battle started!");
console.log(OrcThreeNames + "    ⚔️     " + OrcTwoNames);
```

# Result of the example above

<p align="center">
  <img src="https://i.imgur.com/adQxN3t.png"><br/>
</p>
