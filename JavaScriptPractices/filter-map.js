// const languages = ["js", "html", "css", "cpp", "python"]

// const val = languages.forEach( (item) => {
//     // console.log(item);
// } )
// console.log(val);//undefined
// ---so forEach() doesn't return anything---

// ----Filter method----
// it return the value but conditionally

//`${}` interpolation or a placeholder || expression
// `` template literals

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNum.filter((num) => num > 4);  //methode 1

// const newNum = myNum.filter((num) => {   //method 2
//     return num > 5;
// });

// const newNum = [];   //method 3
// myNum.forEach( (num) => {   
//     if (num > 4) {
//         newNum.push(num);
//     }
// } )

// console.log(newNum);


const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// let userBks = books.filter((bk) => bk.genre === 'Non-Fiction');
// let userBooks = books.filter((bk) => bk.publish > 2000);

// console.log(userBks);
// console.log(userBooks);

let userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === 'History' // in {} there is open scope so return is mandatory
})
console.log(userBooks);



