const palindrome = (string) => string.split('').reverse().join('');

const average = (array) => {
  const reducer = (sum, item) => {
    return sum + item;
  };

  return array.length ? array.reduce(reducer, 0) / array.length : 0;
};

module.exports = {
  palindrome,
  average,
};
