let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];
console.log(fruits);

// new array() constructor => it will creatye an array with the given length
let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

// indexing
console.log(numbers.indexOf(3)); // 2
console.log(numbers.indexOf(6)); // -1

// length
console.log(numbers.length); // 5
console.log(numbers.lastIndexOf(3)); // 2
console.log(numbers.lastIndexOf(6)); // -1

// mutating array
// 1. push() => add element at the end of the array
let number = [1, 2, 3, 4, 5];
console.log(number.push(6));   // 6

// 2. pop() => remove element from the end of the array
console.log(number.pop()); // 6

// 3. shift() => remove element from the start of the array
console.log(number.shift()); // 1

// 4. unshift() => add element at the start of the array
console.log(number.unshift(1)); // 5

// 5. splice() => add or remove element from the array
let number2 = [1, 2, 3, 4, 5];
console.log(number2.splice(2, 0, 6)); // []
console.log(number2); // [1, 2, 6, 3, 4, 5]

