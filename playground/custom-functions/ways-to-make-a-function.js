// function doctorize(name) {
//   return `Hello, Dr. ${name}`;
// }

// const doctorize = function(name) {
//   return `Hello, Dr. ${name}`;
// };


// const inchesToCM = function(inches){
//   return inches * 2.54;
// };

const inchesToCM = (inches) => inches * 2.54;

// function add(a, b = 3){
//   return a + b;
// }

const add = (a, b = 3) => a + b;

// function makeABaby(first, last){
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   };
//   return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });