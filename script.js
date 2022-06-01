const colorTitle = document.getElementById('rgb-color');
const colorGuess = document.getElementById('color-guess');

function createColorGuess(amount){
  for (let index = 0; index < amount; index += 1) {
    let createDiv = document.createElement('div');
    createDiv.className = 'ball';
    colorGuess.appendChild(createDiv);
  }
}

createColorGuess(6);