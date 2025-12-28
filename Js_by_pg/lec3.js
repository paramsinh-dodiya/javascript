// data types

// numbers

let num1 = 10;
let num2 = 20;
console.log(num1 + num2);

// String
let firstName = "Hello";
let lastName = "World";
console.log(firstName + " " + lastName);

// Boolean true -> 1 | false -> 0
let isLoggedIn = true;
console.log(isLoggedIn);

console.log(isLoggedIn + 10); // boolean

// null
let lastNameNull = null;
console.log(lastNameNull);

// undefined
let lastLogging = undefined;
console.log(lastLogging);

// Object
const person = {
    firstName: "Param",
    lastName: 'Dodiya',
    age: 23,
    isStudent: true,
}
console.log(person);


// string '1' + '1' - string
//string + number = string
// string * number = number
console.log('a' * 1)
console.log('a' + 1)
console.log('123' + '123') 
console.log('123' * 2)
console.log('123' + 1)


console.log(typeof person)
console.log(typeof num1);
console.log(typeof firstName);
console.log(typeof isLoggedIn);
console.log(typeof lastNameNull);
console.log(typeof lastLogging);