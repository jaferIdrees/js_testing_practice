const { add, subtract, multiply, devide,} = require ('./Calculator_task3');

describe('Add function testing',()=>{
  test('add 1 to 2 should return 3', () =>{
    expect(add(1, 2)).toBe(3);
  })

  test('add -1 to 2 should return 1', () =>{
    expect(add(-1, 2)).toBe(1);
  })

  test('if non-numeric value is passed add should throw an error', ()=> {
    expect(() => add('a', 2)).toThrow('you need to pass numerical values only');
  })
})

describe('Subtract function testing',()=>{
  test('subtract 1 from 2 should return 1', () =>{
    expect(subtract(2, 1)).toBe(1);
  })

  test('subtract -1 from 2 should return 3', () =>{
    expect(subtract(2, -1)).toBe(3);
  })

  test('if non-numeric value is passed subtract function should throw an error', ()=> {
    expect(() => subtract('a', 2)).toThrow('you need to pass numerical values only');
  })
})

describe('Multiply function testing',()=>{
  test('multiply 1 by 2 should return 2', () =>{
    expect(multiply(2, 1)).toBe(2);
  })

  test('multiply -1 by 2 should return -2', () =>{
    expect(multiply(2, -1)).toBe(-2);
  })

  test('if non-numeric value is passed multiply function should throw an error', ()=> {
    expect(() => multiply('a', 2)).toThrow('you need to pass numerical values only');
  })
})

describe('Devide function testing',()=>{
  test('devide 2 by 1 should return 2', () =>{
    expect(devide(2, 1)).toBe(2);
  })

  test('devide 2 by -1 should return -2', () =>{
    expect(devide(2, -1)).toBe(-2);
  })

  test('if non-numeric value is passed devide function should throw an error', ()=> {
    expect(() => devide('a', 2)).toThrow('you need to pass numerical values only');
  })
})