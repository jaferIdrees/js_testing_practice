const capitalize = require ('./Capitalize_task4');

test('capitalize function should return "Capitalized" when passed "capitalized"', () => {
  expect(capitalize('capitalized')).toBe('Capitalized');
})

test('capitalize function should return "1capitalized" when passed "1capitalized"', () => {
  expect(capitalize('1capitalized')).toBe('1capitalized');
})