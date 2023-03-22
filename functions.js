"use-strict";

// The "g" represents the "global modifier". This means that your replace will replace all copies of the matched string with the replacement string
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};
// console.log(oneWord("my name is pratima pal"));

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);
