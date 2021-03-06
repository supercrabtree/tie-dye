import test from 'ava';
import { mapValues } from 'lodash/fp';
import {
  hexToHsl,
  hexToRgb,
  hslToHex,
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


test('hexToHsl correctly converts', t => {

  var roundedHsl1 = roundObject(hexToHsl('#4086E7'));
  var roundedHsl2 = roundObject(hexToHsl('#F0DBE4'));
  var roundedHsl3 = roundObject(hexToHsl('#C9C9C9'));

  t.same(roundedHsl1, {h: 214.85, s: 77.67, l: 57.84});
  t.same(roundedHsl2, {h: 334.29, s: 41.18, l: 90});
  t.same(roundedHsl3, {h: 0, s: 0, l: 0.79});

});


test('hslToHex correctly converts', t => {

  t.same(hslToHex(276, 100, 85), '#E0B3FF');
  t.same(hslToHex(0, 100, 50),   '#FF0000');
  t.same(hslToHex(343, 0, 51),   '#828282');
  t.same(hslToHex(0, 0, 51),     '#828282');
  t.same(hslToHex(223, 100, 75), '#80A4FF');

});
