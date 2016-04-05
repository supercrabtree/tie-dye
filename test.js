import test from 'ava';
import { hslToRgb, rgbToHsl } from './';
import { mapValues } from 'lodash/fp';

const roundTo2Decimal = x => Math.round(x * 100) / 100;
const roundObject = mapValues(roundTo2Decimal);


console.log('tie-dye', Date.now());


test('rgbToHsl correctly converts', t => {

  var roundedHsl1 = roundObject(rgbToHsl(128, 255, 0));
  var roundedHsl2 = roundObject(rgbToHsl(234, 12, 35));

  t.same(roundedHsl1, { h:89.88, s:1,   l:0.5  });
  t.same(roundedHsl2, { h:353.78, s:0.9, l:0.48 });

});


test('hslToRgb correctly converts', t => {

  var roundedRgb1 = roundObject(hslToRgb(343, 0.1,  0.5 ));
  var roundedRgb2 = roundObject(hslToRgb(223, 0.22, 0.45));

  t.same(roundedRgb1, { r:140.25, g:114.75, b:121.98 });
  t.same(roundedRgb2, { r:89.51,  g:103.81, b:140    });

});

