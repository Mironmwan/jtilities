/**
 * Returns a random element from an array.
 * @param {Array} arr - The array to pick from.
 * @returns {*} A random element from the array, or undefined if invalid.
 */
export function randomElementFromArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    console.error(`Error: ${arr} is not a valid non-empty array`);
    return;
  }
  const randomInteger = Math.floor(Math.random() * arr.length);
  return arr[randomInteger];
}

/**
 * Returns a random integer between min and max (inclusive).
 * @param {number} min - Minimum value.
 * @param {number} max - Maximum value.
 * @returns {number} Random integer in the range.
 */
export function randomIntFromRange(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    console.error('Error: min and max must be numbers');
    return;
  }
  if (min > max) {
    console.error('Error: min cannot be greater than max');
    return;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The string to capitalize.
 * @returns {string|undefined} Capitalized string, or undefined if invalid.
 */
export function capitalize(str) {
  if (typeof str !== 'string') {
    console.error(`Error: ${str} is not a string`);
    return;
  }
  str = str.trim();
  let firstLetter = str.slice(0, 1).toUpperCase(),
    otherLetters = str.slice(1).toLowerCase();
  return firstLetter + otherLetters;
}

/**
 * Truncates text to a given length and adds ellipsis if needed.
 * @param {Object} params - Parameters object.
 * @param {string} params.text - The text to truncate.
 * @param {number} params.length - Maximum length before ellipsis.
 * @returns {string} Truncated text.
 */
export function ellipsify({ text, length }) {
  if (typeof text !== 'string' || typeof length !== 'number') {
    console.error('Error: invalid parameters for ellipsify');
    return '';
  }
  return text.length <= length ? text : text.slice(0, length) + '...';
}

/**
 * Checks if a parameter is a plain object.
 * @param {*} param - The value to check.
 * @returns {boolean} True if plain object, false otherwise.
 */
export function isObj(param) {
  return typeof param === 'object' && !Array.isArray(param) && param !== null;
}

/**
 * Shuffles the elements of an array in place.
 * @param {Array} arr - The array to shuffle.
 * @returns {Array|undefined} Shuffled array, or undefined if invalid.
 */
export function shuffleArr(arr) {
  if (!Array.isArray(arr)) {
    console.error(`Error: ${arr} is not an array`);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    let randIndex = Math.floor(Math.random() * arr.length);
    let tempVal = arr[i];
    arr[i] = arr[randIndex];
    arr[randIndex] = tempVal;
  }
  return arr;
}

/**
 * Shuffles the characters of a string.
 * @param {string} str - The string to shuffle.
 * @returns {string|undefined} Shuffled string, or undefined if invalid.
 */
export function shuffleStr(str) {
  if (typeof str !== 'string') {
    console.error(`Error: ${str} is not a string`);
    return;
  }
  const arr = [...str];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}

/**
 * Sorts an array using quicksort algorithm.
 * @param {Array<number>} arr - Array of numbers to sort.
 * @returns {Array<number>|undefined} Sorted array, or undefined if invalid.
 */
export function sortArr(arr) {
  if (!Array.isArray(arr)) {
    console.error(`Error: ${arr} is not an array`);
    return;
  }
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...sortArr(left), pivot, ...sortArr(right)];
}

/**
 * Removes duplicates from an array.
 * @param {Array} arr - The array to process.
 * @returns {Array|undefined} Array with unique values, or undefined if invalid.
 */
export function unique(arr) {
  if (!Array.isArray(arr)) {
    console.error(`Error: ${arr} is not an array`);
    return;
  }
  return [...new Set(arr)];
}

/**
 * Splits an array into chunks of given size.
 * @param {Array} arr - The array to split.
 * @param {number} size - Size of each chunk.
 * @returns {Array<Array>|undefined} Array of chunks, or undefined if invalid.
 */
export function chunk(arr, size) {
  if (!Array.isArray(arr)) {
    console.error(`Error: ${arr} is not an array`);
    return;
  }
  if (typeof size !== 'number' || size <= 0) {
    console.error('Error: size must be a positive number');
    return;
  }
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/**
 * Flattens a nested array into a single level.
 * @param {Array} arr - The array to flatten.
 * @returns {Array|undefined} Flattened array, or undefined if invalid.
 */
export function flatten(arr) {
  if (!Array.isArray(arr)) {
    console.error(`Error: ${arr} is not an array`);
    return;
  }
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
    []
  );
}

/**
 * Removes falsy values from an array.
 * @param {Array} arr - The array to compact.
 * @returns {Array|undefined} Compacted array, or undefined if invalid.
 */
export function compact(arr) {
  if (!Array.isArray(arr)) {
    console.error(`Error: ${arr} is not an array`);
    return;
  }
  return arr.filter(Boolean);
}

/**
 * Returns the intersection of two arrays.
 * @param {Array} arr1 - First array.
 * @param {Array} arr2 - Second array.
 * @returns {Array|undefined} Intersection array, or undefined if invalid.
 */
export function intersection(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    console.error('Error: both parameters must be arrays');
    return;
  }
  const set2 = new Set(arr2);
  return arr1.filter((item) => set2.has(item));
}

/**
 * Returns the difference between two arrays (elements in arr1 not in arr2).
 * @param {Array} arr1 - First array.
 * @param {Array} arr2 - Second array.
 * @returns {Array|undefined} Difference array, or undefined if invalid.
 */
export function difference(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    console.error('Error: both parameters must be arrays');
    return;
  }
  const set2 = new Set(arr2);
  return arr1.filter((item) => !set2.has(item));
}

/**
 * Shallow or recursive merge of two objects.
 * @param {Object} obj1 - Target object.
 * @param {Object} obj2 - Source object.
 * @param {boolean} [deep=false] - Whether to perform deep merge.
 * @returns {Object} Merged object.
 */
export function merge(obj1, obj2, deep = false) {
  if (!isObj(obj1) || !isObj(obj2)) {
    console.error('Error: both parameters must be plain objects');
    return {};
  }
  const result = { ...obj1 };
  for (const key in obj2) {
    if (deep && isObj(obj2[key])) {
      result[key] = merge(result[key] || {}, obj2[key], true);
    } else {
      result[key] = obj2[key];
    }
  }
  return result;
}

/**
 * Returns a new object without specified keys.
 * @param {Object} obj - Source object.
 * @param {string[]} keys - Keys to omit.
 * @returns {Object} New object without specified keys.
 */
export function omit(obj, keys) {
  if (!isObj(obj) || !Array.isArray(keys)) {
    console.error('Error: invalid parameters for omit');
    return {};
  }
  const result = {};
  for (const key in obj) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

/**
 * Returns a new object with only specified keys.
 * @param {Object} obj - Source object.
 * @param {string[]} keys - Keys to pick.
 * @returns {Object} New object with only specified keys.
 */
export function pick(obj, keys) {
  if (!isObj(obj) || !Array.isArray(keys)) {
    console.error('Error: invalid parameters for pick');
    return {};
  }
  const result = {};
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

/**
 * Swaps keys and values of an object.
 * @param {Object} obj - Source object.
 * @returns {Object} New object with inverted keys and values.
 */
export function invert(obj) {
  if (!isObj(obj)) {
    console.error('Error: parameter must be a plain object');
    return {};
  }
  const result = {};
  for (const key in obj) {
    result[obj[key]] = key;
  }
  return result;
}

/**
 * Deeply compares two objects for equality.
 * @param {Object} obj1 - First object.
 * @param {Object} obj2 - Second object.
 * @returns {boolean} True if objects are deeply equal, false otherwise.
 */
export function deepCompareObj(obj1, obj2) {
  if (!isObj(obj1) || !isObj(obj2)) {
    console.error('Error: both parameters must be plain objects');
    return false;
  }
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];

    const areObjects = isObj(val1) && isObj(val2);
    if (areObjects && !deepCompareObj(val1, val2)) {
      return false;
    } else if (!areObjects && val1 !== val2) {
      return false;
    }
  }
  return true;
}

/**
 * Restricts a number within a given range.
 * @param {number} num - The number to clamp.
 * @param {number} min - Minimum allowed value.
 * @param {number} max - Maximum allowed value.
 * @returns {number|undefined} Clamped number, or undefined if invalid.
 */
export function clamp(num, min, max) {
  if (
    typeof num !== 'number' ||
    typeof min !== 'number' ||
    typeof max !== 'number'
  ) {
    console.error('Error: num, min, and max must be numbers');
    return;
  }
  if (min > max) {
    console.error('Error: min cannot be greater than max');
    return;
  }
  return Math.min(Math.max(num, min), max);
}

/**
 * Calculates the sum of numbers in an array.
 * @param {number[]} arr - Array of numbers.
 * @returns {number|undefined} Sum of array values, or undefined if invalid.
 */
export function sumArr(arr) {
  if (!Array.isArray(arr) || arr.some((n) => typeof n !== 'number')) {
    console.error('Error: arr must be an array of numbers');
    return;
  }
  return arr.reduce((acc, val) => acc + val, 0);
}

/**
 * Calculates the average (mean) of numbers in an array.
 * @param {number[]} arr - Array of numbers.
 * @returns {number|undefined} Average of array values, or undefined if invalid.
 */
export function averageArr(arr) {
  if (
    !Array.isArray(arr) ||
    arr.length === 0 ||
    arr.some((n) => typeof n !== 'number')
  ) {
    console.error('Error: arr must be a non-empty array of numbers');
    return;
  }
  return sumArr(arr) / arr.length;
}

/**
 * Computes the factorial of a number.
 * @param {number} n - Non-negative integer.
 * @returns {number|undefined} Factorial of n, or undefined if invalid.
 */
export function factorial(n) {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    console.error('Error: n must be a non-negative integer');
    return;
  }
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Checks if a number is prime.
 * @param {number} n - Integer to check.
 * @returns {boolean} True if prime, false otherwise.
 */
export function isPrime(n) {
  if (typeof n !== 'number' || n <= 1 || !Number.isInteger(n)) {
    console.error('Error: n must be an integer greater than 1');
    return false;
  }
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * Converts a string to camelCase.
 * @param {string} str - The string to convert.
 * @returns {string|undefined} camelCase string, or undefined if invalid.
 */
export function camelCase(str) {
  if (typeof str !== 'string') {
    console.error(`Error: ${str} is not a string`);
    return;
  }
  return str
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
    .replace(/^(.)/, (c) => c.toLowerCase());
}

/**
 * Converts a string to kebab-case.
 * @param {string} str - The string to convert.
 * @returns {string|undefined} kebab-case string, or undefined if invalid.
 */
export function kebabCase(str) {
  if (typeof str !== 'string') {
    console.error(`Error: ${str} is not a string`);
    return;
  }
  return str
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

/**
 * Converts a string to a URL-friendly slug.
 * @param {string} str - The string to slugify.
 * @returns {string|undefined} Slugified string, or undefined if invalid.
 */
export function slugify(str) {
  if (typeof str !== 'string') {
    console.error(`Error: ${str} is not a string`);
    return;
  }
  return str
    .trim()
    .toLowerCase()
    .replace(/[\s]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-');
}

/**
 * Reverses the characters in a string.
 * @param {string} str - The string to reverse.
 * @returns {string|undefined} Reversed string, or undefined if invalid.
 */
export function reverse(str) {
  if (typeof str !== 'string') {
    console.error(`Error: ${str} is not a string`);
    return;
  }
  return [...str].reverse().join('');
}

/**
 * Pads a string to a given length with a specified character.
 * @param {string} str - The string to pad.
 * @param {number} length - Desired total length.
 * @param {string} char - Character to pad with.
 * @returns {string|undefined} Padded string, or undefined if invalid.
 */
export function pad(str, length, char = ' ') {
  if (
    typeof str !== 'string' ||
    typeof length !== 'number' ||
    typeof char !== 'string'
  ) {
    console.error('Error: invalid parameters for pad');
    return;
  }
  if (char.length !== 1) {
    console.error('Error: pad character must be a single character');
    return;
  }
  if (str.length >= length) return str;
  const padLength = length - str.length;
  const leftPad = Math.floor(padLength / 2);
  const rightPad = padLength - leftPad;
  return char.repeat(leftPad) + str + char.repeat(rightPad);
}

/**
 * Converts a string to snake_case.
 * @param {string} str - The string to convert.
 * @returns {string|undefined} snake_case string, or undefined if invalid.
 */
export function snakeCase(str) {
  if (typeof str !== 'string') {
    console.error(`Error: ${str} is not a string`);
    return;
  }
  return str
    .trim()
    .toLowerCase()
    .replace(/[\s\-]+/g, '_')
    .replace(/[^a-z0-9_]/g, '')
    .replace(/_+/g, '_');
}
