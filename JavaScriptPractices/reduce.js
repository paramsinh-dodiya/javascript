const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNum.map( (num) => num +10 ) 
// console.log(newNum);

 
// const values = myNum.forEach( (numb) => {
//     console.log(numb * 3)
// } );


// Chaining

// const newNum = myNum.map( (num) => num * 10 )
//                     .map( (num) => num + 1 )
//                     .filter( (num) => num >= 40 )

// console.log(newNum);


// ======= Reduce =======

const myNumbers = [1, 2, 3, 4]

// const myTotal = myNumbers.reduce( function(acc, cur_val) {
//     console.log(`accumulator : ${acc} and currentValue : ${cur_val}`);
//     return acc + cur_val;
// },0 )

// const myTotal = myNumbers.reduce( (accumulator, currentVal) => 
//     (console.log(`accumulator : ${accumulator} and currentValue : ${currentVal}`), 
//     (accumulator + currentVal)), 0 )

// const myTotal = myNumbers.reduce( (accumulator, currentVal) => accumulator + currentVal, 0 ) // in short

// console.log(myTotal);


// ======= Example of Shoping Cart =======

const shoppingCart = [
    {
        course: "java script",
        price: 599
    },
    {
        course: "java dev",
        price: 1599
    },
    {
        course: "python",
        price: 2199
    },
    {
        course: "data science",
        price: 3999
    },
    
]

const pay = shoppingCart.reduce( (acc,item) => acc + item.price, 0 );
console.log(pay);
