const colourCodeElement = document.getElementById('colour-code');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');
let randomColour = null;
let score = 0;


function generateRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function generateRandomColourRGB() {
    const r = generateRandomNumber(0, 255);
    const g = generateRandomNumber(0, 255);
    const b = generateRandomNumber(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
}

function incrementScore() {
    score += 1;
    scoreElement.innerText = score;

}

function validateResult(ele) {
    const selectedColour = ele.target.style.backgroundColor;
    if (selectedColour === randomColour) {
        incrementScore();
    } else {
        score = 0;
    }
    window.localStorage.setItem('score', score);
    startGame();
}

function startGame() {

    score = Number(window.localStorage.getItem('score')) || 0;
    scoreElement.innerText = score;
    optionsElement.innerHTML = null;
    randomColour = generateRandomColourRGB();
    colourCodeElement.innerText = randomColour;

    const ansIndex = generateRandomNumber(0, 5);

    for (let i = 0; i < 6; i++) {
        const div = document.createElement('div');
        div.addEventListener('click', validateResult);
        div.style.backgroundColor = i === ansIndex ? randomColour : generateRandomColourRGB();
        optionsElement.append(div);
      
    }

}

window.addEventListener("load", () => startGame());