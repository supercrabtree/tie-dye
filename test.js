import test from 'ava';
import { hslToRgb, rgbToHsl } from './';
import { mapValues } from 'lodash/fp';

const roundTo2Decimal = x => Math.round(x * 100) / 100;
const roundObject = mapValues(roundTo2Decimal);


console.log('tie-dye', Date.now());


test('rgbToHsl correctly converts', t => {

  var roundedHsl1 = roundObject(rgbToHsl(128, 255, 0));
  var roundedHsl2 = roundObject(rgbToHsl(234, 12, 35));

  t.same(roundedHsl1, { h:89.88,  s:100,   l:50  });
  t.same(roundedHsl2, { h:353.78, s:90.24, l:48.24 });

});


test('hslToRgb correctly converts', t => {

  var roundedRgb1 = roundObject(hslToRgb(343, 10, 50 ));
  var roundedRgb2 = roundObject(hslToRgb(223, 22, 45));

  t.same(roundedRgb1, { r:140.25, g:114.75, b:121.98 });
  t.same(roundedRgb2, { r:89.51,  g:103.81, b:140    });

});

