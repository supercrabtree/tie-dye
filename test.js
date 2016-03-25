import test from 'ava';
import { hslToRgb, rgbToHsl } from './';
import { mapValues } from 'lodash/fp';

const roundTo2Decimal = (x) => Math.round(x*100)/100;
const roundObject = mapValues(roundTo2Decimal);

test('rgbToHsl', t => {
  t.same(roundObject(rgbToHsl(128, 255, 0)), { h:0.25,  s:1,   l:0.5  });
  t.same(roundObject(rgbToHsl(234, 12, 35)), { h:0.98, s:0.9, l:0.48 });
});

test('hslToRgb', t => {
  t.same(roundObject(hslToRgb(343, 0.1,  0.5 )), { r:140.25, g:114.75, b:121.98 });
  t.same(roundObject(hslToRgb(223, 0.22, 0.45)), { r:89.51,  g:103.81, b:140    });
});

