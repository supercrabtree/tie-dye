![tie-dye](https://raw.githubusercontent.com/supercrabtree/tie-dye/master/media/tie-dye-header.jpg)

Tie-dye is a simple modular color converter.

Although there are a bunch of color conversion libraries on npm, I couldn't find one where it was simple to just import the conversions you want. While importing a library is not a big deal in node, for the browser there is not reason to load a whole library of code you are not using. Normally I find I only need one conversion.

### Current API

##### RGB to HSL

```js
import rgbToHsl from 'tie-dye/rgbToHsl';

const dreamyRedHsl = rgbToHsl(222, 67, 67);

console.log(dreamyRedHsl); // => { h: 0, s: 0.7013574660633485, l: 0.5666666666666667 }
```

##### HSL to RGB

```js
import hslToRgb from 'tie-dye/hslToRgb';

const foamGreenRgb = hslToRgb(96, 0.46, 0.59);

console.log(foamGreenRgb); // => { r: 140.83139999999997, g: 198.543, b: 102.35699999999997 }
```

### Keeping it simple 
In the spirit of unix this library does not aim to round your results, or allow you to pass arguments with r g b / h s l properties, etc. If you wanna do that here are some really simple examples.

##### Passing objects with h s l properties

```js
import hslToRgb from 'tie-dye/hslToRgb';

const hslObjectToRgb = obj => hslToRgb(obj.h, obj.s, obj.l);

const foamGreenHsl = {h: 96, s: 0.46, l: 0.59};

const foamGreenRgb = hslObjectToRgb(96, 0.46, 0.59);

console.log(foamGreenRgb); // => { r: 140.83139999999997, g: 198.543, b: 102.35699999999997 }
```

##### Rounding results to two decimal places

```js
import hslToRgb from 'tie-dye/hslToRgb';
import { mapValues } from 'lodash/fp';

const roundTo2Decimal = x => Math.round(x * 100) / 100;
const roundObject = mapValues(roundTo2Decimal);

const foamGreenRgb = roundObject(hslToRgb(96, 0.46, 0.59));

console.log(foamGreenRgb); // => { r: 140.83, g: 198.54, b: 102.36 }
```
