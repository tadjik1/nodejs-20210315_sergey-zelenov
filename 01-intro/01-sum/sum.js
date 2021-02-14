function sum(a, b) {
  if ([a, b].some(e => typeof e !== 'number'))
    throw new TypeError();
  return a + b;
}

module.exports = sum;
