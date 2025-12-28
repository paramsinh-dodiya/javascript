console.log('testing')
// varisable declaration

var name = "John";
var age = 30;
var num1 = 10;
var num2 = 20;

console.log(name)
console.log(age)
console.log(num1 + num2)

// var scope is global
// can access outside the block
if (true) {
    var myage = 10;
    // also can write here
}
console.log(myage);


// in let cant access outside the block
//let scope is local
let myAge = 25; 
console.log(myAge)
if (true) {
    let Age = 66; 
    console.log(Age); 
}

//const scope-> local
//values cant be changed
const my_age = 90;
console.log(my_age); 

const my_Age = 100;
console.log(my_Age); 

