let car = {
    name: "BMW",
    model: "X5",
    color: "Black",
    start: function () {
        console.log("Car is started");
    },
};
car.start();
console.log(Object.keys(car)); 
console.log(Object.values(car)); 

for (let key in car) {
    console.log(key, car[key]);
}

// built-in object methods
// 1. Math object
console.log(Math.random()); 
console.log(Math.PI); 
console.log(Math.round(4.7)); 
console.log(Math.pow(2, 3)); 
console.log(Math.sqrt(16)); 
console.log(Math.max(0, 150, 30, 20, -8, -200)); 

// 2. Date object
let today = new Date();
console.log(today.toDateString());

// functions
function greet(name) {
    console.log("Hello " + name);
}
console.log(greet("John")); 

// arrow function
const greet1 = (name) => 'Hello, &{name}';
console.log(greet1('John')); 

// Function expression
const greet2 = function (name) {
    return "Hello " + name; }
console.log(greet2("John")); 

// IIFE (Immediately Invoked Function Expression)
(function (name) {
    console.log("Hello World " + name);}
)("Shivam");


// Array
let fruits = ["Apple","Banana","Mango"];
console.log(fruits)
console.log(fruits[0])