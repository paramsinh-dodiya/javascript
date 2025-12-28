const myObj = {
    js: "java script",
    html: "hyper text markup language",
    css: "cascading style sheets",
    cpp: "c plus plus"
}

for (const key in myObj) {
    // console.log(key); // print key of the objects
    // console.log(myObj[key]); // print value of the objects
    // console.log(`KEY : ${key}, VALUE : ${myObj[key]}`);

}


const programming = ["js", "html", "css", "cpp", "python"]

for (const key in programming) {
    // console.log(key);// its show array keys
    console.log(programming[key]);// its show array values
}
// forIn loops in Arrays shows key directly but special care is needed when accessing values

