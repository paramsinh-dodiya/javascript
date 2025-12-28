// for of 
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
    
}

const greeting = "Hello, world!";
for (const greet of greeting) {
    if (greet == ' ') {
        continue;
    }
    // console.log(`value : ${greet}`);
    
}

// maps
// maps are not iterable

const map = new Map();
map.set('name', 'John');
map.set('age', 30);
map.set('city', 'New York');

// console.log(map);
for (const [key, value] of map) {
    //  console.log(`key : ${key}, value : ${value}`);
}
for (const key of map) {
    //  console.log(key);
}


// forof cant work on objects
// objects are not iterable

myObj = {
    game1: 'nfs',
    game2: 'fifa',
    game3: 'cod'
}
// for (const key of myObj) {
//     // console.log(key);
    
// }