const languages = ["js", "html", "css", "cpp", "python"]


// languages.forEach(function(val) {
//     console.log(val);
// });


// languages.forEach( (value) => {
//     console.log(value);
// } )


// function printMe(item) {
//     console.log(item);
// }
// languages.forEach(printMe); //give reference not execute printMe()x


// languages.forEach( (item, index, array) => {
//     console.log(item, index, array);
// } )


const myCodeLang = [
    {
        langName: "JavaScript",
        langFileName: "js"
    },
    {
        langName: "Python",
        langFileName: "py"
    },
    {
        langName: "Java",
        langFileName: "java"
    },
    {
        langName: "C++",
        langFileName: "cpp"
    },
]

myCodeLang.forEach( (item) => {
    console.log(item);
    
    // console.log(item.langName);
    // console.log(item.langFileName);
    
} )
// its doesn't return anything