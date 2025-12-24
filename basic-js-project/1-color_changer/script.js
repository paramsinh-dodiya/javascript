const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach( function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);

        // let color = e.target.id;     //method 1
        // body.style.backgroundColor = color;

        // if (e.target.id === "grey") {    //method 2
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === "red") {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === "blue") {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === "yellow") {
        //     body.style.backgroundColor = e.target.id;
        // }

        // method 3
        switch (e.target.id) {
            case "grey": // also use "grey" = e.target.id
                body.style.backgroundColor = "grey"; // here to 
                break;
            case "red":
                body.style.backgroundColor = "red";
                break;
            case "blue":
                body.style.backgroundColor = "blue";
                break;
            case "yellow":
                body.style.backgroundColor = "yellow";
                break;
            default:
                break;
        }
    })
    
} )


// method 4

// document.getElementById("grey").onclick = function () {
//   document.body.style.backgroundColor = "grey";
// };
// document.getElementById("white").onclick = function () {
//   document.body.style.backgroundColor = "white";
// };
// document.getElementById("blue").onclick = function () {
//   document.body.style.backgroundColor = "blue";
// };
// document.getElementById("yellow").onclick = function () {
//   document.body.style.backgroundColor = "yellow";
// };
