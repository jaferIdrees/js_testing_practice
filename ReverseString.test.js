const reverseString = require ('./ReverseString');

test('return "olleh" for reverse "hello"', () => {
  expect(reverseString('hello')).toBe('olleh');
})

test('return "fEdCbA" for reverse "AbCdEf"', () => {
  expect(reverseString('AbCdEf')).toBe('fEdCbA');
})