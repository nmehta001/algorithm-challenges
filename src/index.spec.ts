import { additivePersistence, numberSearch, stringReduction } from './index';

describe('additivePersistence', () => {
  test('Should find the total moves needed to reduce down to a single digit', () => {
    const result = additivePersistence(1234);
    expect(result).toEqual(2);
  });

  test('Should return a count of 0 if a negative integer is provided', () => {
    const result = additivePersistence(-12341234234);
    expect(result).toEqual(0);
  });

  test('Should return a count of 0 if a floated number is provided', () => {
    const result = additivePersistence(1243245.23);
    expect(result).toEqual(0);
  });

  test('Return a count of 0 if a float starting as . is provided', () => {
    const result = additivePersistence(0.3874523403);
    expect(result).toEqual(0);
  });
});

describe('numberSearch', () => {
  test('Should find the sum of integers in a string', () => {
    const result = numberSearch('1 L0v3 CaNdY');
    expect(result).toEqual(4);
  });

  test('Should accept positive and negative integers', () => {
    const result = numberSearch('-1 is always m-1s53d');
    expect(result).toEqual(6);
  });

  test('Should return 0 if nothing is passed', () => {
    const result = numberSearch();
    expect(result).toEqual(0);
  });

  test('Should return 0 if a string with no numbers is passed', () => {
    const result = numberSearch('A sentence with no numbers');
    expect(result).toEqual(0);
  });

  test('Should accept a floating integer whilst returning nearest whole integer', () => {
    const result = numberSearch('We all fl0.00004t d0wn h3re');
    expect(result).toEqual(3);
  });

  test('Should accept a floating integer that starts with a .', () => {
    const result = numberSearch('I love to not include zer.0 at the st4rt of a floating point');
    expect(result).toEqual(4);
  });
});

describe('stringReduction', () => {
  test('Should return the total number of iterations to reduce the string down', () => {
    const result = stringReduction('abcabc');
    expect(result).toEqual(2);
  });

  test('Should return the total number of iterations (ignoring case)', () => {
    const result = stringReduction('aBcAbC');
    expect(result).toEqual(2);
  });

  test('Should return 0 if anything other than a, b or c is provided', () => {
    const result1 = stringReduction('abc1');
    expect(result1).toEqual(0);
    const result2 = stringReduction('abc@abc');
    expect(result2).toEqual(0);
    const result3 = stringReduction('abcd');
    expect(result3).toEqual(0);
  });
});
