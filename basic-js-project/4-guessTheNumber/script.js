// let randomNumber = parseInt(Math.random() * 100 + 1);
// // console.log(randomNumber);

// const submit = document.querySelector("#subt");
// const userInput = document.querySelector("#guessField");
// const guessSlot = document.querySelector(".guesses");
// const remaining = document.querySelector(".lastResult");
// const lowOrHigh = document.querySelector(".lowOrHi");
// const startOver = document.querySelector(".resultParas");

// const p = document.createElement('p');

// let prevGuess = [];
// let numGuess = 1;

// let playGame = true;

// if (playGame) {
//     submit.addEventListener('click', function (e) {
//         e.preventDefault();
        // const guess = parseInt(userInput.value);
//         // console.log(guess);
//         validateGuess(guess);
//     });
// }

// function validateGuess(guess) {
//     //
//     if (isNaN(guess)) {
//         alert('Please enter a valid number');
//     } else if(guess < 1) {
//         alert('Please enter a number more than 0')
//     } else if(guess > 100) {
//         alert('Please enter a number less than 100')
//     } else {
//         prevGuess.push(guess);
//         if (numGuess === 10) {
//             displayGuess(guess);
//             displayMessage(`Game is Over. Random No. was ${randomNumber}`);
//             endGame();
//         } else {
//             displayGuess(guess);
//             checkGuess(guess);
//         }
//     }
// }

// function checkGuess(guess) {
//     //
//     if (guess === randomNumber) {
//         displayMessage(`You guessed it right`);
//         endGame();
//     } else if(guess < randomNumber) {
//         displayMessage(`Number is Low`);
//     } else if(guess > randomNumber) {
//         displayMessage(`Number is High`);
//     }
// }

// function displayGuess(guess) {
//     //
//     userInput.value = '';
//     guessSlot.innerHTML += `${guess}, `;
//     numGuess++;
//     remaining.innerHTML = `${11 - numGuess}`
// }

// function displayMessage(message) {
//     //
//     lowOrHigh.innerHTML =  `<h3>${message}</h3>`
// }

// function endGame() {
//     //
//     userInput.value = '';
//     userInput.setAttribute('disabled', '');
//     p.classList.add('button');
//     p.innerHTML = `<h3 id= "newGame">start New Game</h3>`;
//     startOver.appendChild(p);
//     playGame = false;
//     newGame();
// }

// function newGame() {
//     //
//     const newGameButton = document.querySelector('#newGame');
//     newGameButton.addEventListener('click', function (e) {
//         randomNumber = parseInt(Math.random() * 100 + 1);
//         prevGuess = [];
//         numGuess = 1;
//         guessSlot.innerHTML = '';
//         remaining.innerHTML = `${11 - numGuess}`;
//         lowOrHi.innerHTML = ''; 
//         userInput.removeAttribute('disabled');
//         startOver.removeChild(p)

//         playGame = true;
//     })
// }

// =================== My Practices =====================

let randomNumber = parseInt(Math.random() * 100 + 1) ;
// console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const slot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
        
    });
}



function validateGuess(guess) {
    
    if (isNaN(guess)) {
        alert('Plese enter a valid number');
    } else if (guess < 1) {
        alert('Plese enter a number more then 0');
    } else if (guess > 100) {
        alert('Plese enter a number less then 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            clearGuess(guess);
            displayMessage(`Game is Over. Random No. was ${randomNumber}`);
            endGame();
        } else {
            clearGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`)
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is Low`);
    }else if(guess > randomNumber) {
        displayMessage(`Number is High`);
    }
}

function clearGuess(guess) {
    
    userInput.value = '';
    slot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    
    lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h3 id= "newGame">start New Game</h3>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
    
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        slot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        lowOrHi.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;

    })
    
}
