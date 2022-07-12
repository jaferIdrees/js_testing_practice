const stringLength = require('./stringLength_task1')

test('Length of "Hello" is 5', ()=> {
  expect(stringLength('Hello')).toBe(5);
})

test('To throw error if empty string is passed', ()=> {
  expect(() => stringLength('')).toThrow('Invalid string length');
})

test('To throw error if more than 10 characters are passed', ()=> {
  expect(() => stringLength('')).toThrow('Invalid string length');
})