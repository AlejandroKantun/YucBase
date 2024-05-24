import { suma } from "../src/theme/suma ";
import { toHex } from '../src/theme/appTheme';


test('tohex', () => {
  expect(toHex(0)).toBe('00');
});

test('tohex', () => {
  expect(toHex(128)).toBe('80');
});
test('tohex', () => {
  expect(toHex(255)).toBe('FF');
});

