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
