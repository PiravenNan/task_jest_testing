const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 50000;
    actual = sum(20000,30000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -10;
    actual = sum(-7,-3);
    expect(actual).toBe(expected);
    
  });

  test('can add zero', () => {
    expected = 1;
    actual = sum(0,1);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = -1;
    actual = subtract(2, 3);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = -10000;
    actual = subtract(20000,30000);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = -4;
    actual = subtract(-7,-3);
    expect(actual).toBe(expected);
    
  });

  test('can subtract zero', () => {
    expected = 1;
    actual = subtract(1,0);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 6;
    actual = multiply(2, 3);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => { 
    expected = 600000000;
    actual = multiply(20000,30000);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 21;
    actual = multiply(-7,-3);
    expect(actual).toBe(expected);
    
  });

  test('can mutliply by zero', () => {
    expected = 0;
    actual = multiply(0,1);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

  test('can divide two small positive numbers', () => {
    expected = 2;
    actual = divide(6, 3);
    expect(actual).toBe(expected);
  });

  test('can divide two large positive numbers', () => { 
    expected = 2;
    actual = divide(60000,30000);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 2;
    actual = divide(-4,-2);
    expect(actual).toBe(expected);
    
  });

  test('can divide by zero', () => {
    expected = Infinity;
    actual = divide(1,0);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {
  test('can calculate modulus',() => {
    expected = 19;
    actual = modulus(39,20);
    expect(actual).toBe(expected);
  })

});

describe('even', () => {
  
  test('is true for even numbers', () => {
    expected = true;
    actual = even(2);
    expect(actual).toBe(expected);
  });

  test('is false for odd numbers', () => {
    expected = false;
    actual = even(3);
    expect(actual).toBe(expected);
  });

});

describe('odd', () => {

  test('is true for odd numbers', () => {
    expected = true;
    actual = odd(24481);
    expect(actual).toBe(expected);
  });

  test('is false for even numbers', () => {
    expected = false;
    actual = odd(4);
    expect(actual).toBe(expected);
  });

});
