/**
 * Adds individual numbers of a positive integer together until the result is one number
 * @param {number} integer
 * @return {number} total number of iterations to complete the task
 */
export const additivePersistence = (integer: number): number => {
  // early bail out if the integer is negative or contains decimals
  if (Math.sign(integer) < 1 || !Number.isInteger(integer)) return 0;

  // Break the integer down to its individual numbers
  let numbers = integer.toString().split('');
  let count = 0;

  // bail out if there is only one number
  if (numbers.length <= 1) return count;

  // Add the individual numbers together
  // Break them back down
  // Increment the number of times this is done until there is only a single digit number
  do {
    const sum = numbers.reduce((currentTotal, value) => Number(currentTotal) + Number(value), 0);
    numbers = sum.toString().split('');
    count += 1;
  } while (numbers.length > 1);

  return count;
};

/**
 * Finds and add the numbers together in an individual string
 * @param {string} str
 * @return {number} the total of the numbers added together
 */
export const numberSearch = (str: string = ''): number => {
  // RegEx to find potentially negative numbers, this includes floating numbers as well
  const matches = str.match(/-?(\d*[.]\d+)|-?\d/g) || [];
  // perform a reduce to add the numbers together
  const total = matches.reduce((currentTotal, value) => {
    // If the number is a float, round it to the nearest value otherwise just use the original value
    const rounded = value.includes('.') ? Math.round(Number(value)) : value;

    return Number(currentTotal) + Number(rounded);
  }, 0);
  return total;
};

/**
 * Attempts to perform a reduction on the string by checking adjacent characters and mapping a new character on them
 * @param {string} str
 * @return {number} The total amount of times it took to reduce the string
 */
export const stringReduction = (str: string): number => {
  // early bailout if the provided string is anything else except some form of 'a', 'b' or 'c'
  if (str.match(/[d-zD-Z\d\W]/)) return 0;
  // ignore the case
  let lowered = str.toLowerCase();
  // mappings, we want to replace the key with the value. i.e. abc -> ['ab', 'c'] -> ab becomes c
  const transforms: { [key: string]: string } = {
    ab: 'c',
    ac: 'b',
    bc: 'a',
    ba: 'c',
    ca: 'b',
    cb: 'a',
  };

  // initialise original as nothing
  let original: string = '';

  while (lowered !== original) {
    original = lowered;
    for (let key in transforms) {
      // use string replacement to replace adjacent characters with our mapped value
      lowered = lowered.replace(key, transforms[key]);
    }
  }

  return lowered.length;
};
