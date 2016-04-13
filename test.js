import test from 'ava';
import { mapValues } from 'lodash/fp';
import {
  hexToRgb,
  hslToRgb,
  rgbToHex,
  rgbToHsl
} from './';

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


test('rgbToHex correctly converts', t => {

  t.same(rgbToHex(255, 0, 0), '#FF0000');
  t.same(rgbToHex(23, 43, 123), '#172B7B');
  t.same(rgbToHex(223, 143, 13), '#DF8F0D');

});

test('hexToRgb correctly converts', t => {

  t.same(hexToRgb('#FF0000'), {r: 255, g: 0, b: 0});
  t.same(hexToRgb('#172B7B'), {r: 23, g: 43, b: 123});
  t.same(hexToRgb('#DF8F0D'), {r: 223, g: 143, b: 13});

});

