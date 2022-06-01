const colorTitle = document.getElementById('rgb-color');
const colorGuess = document.getElementById('color-guess');
let colorBall = document.getElementsByClassName('ball');


function createRandomColor(){
  let red = Math.floor(Math.random()*255);
  let green = Math.floor(Math.random()*255);
  let blue = Math.floor(Math.random()*255);
  let rgb = `(${red}, ${green}, ${blue})`;
  return rgb;
}

function createColorGuess(amount){
  for (let index = 0; index < amount; index += 1) {
    let createDiv = document.createElement('div');
    createDiv.className = 'ball';
    createDiv.style.backgroundColor = 'rgb'+createRandomColor();
    colorGuess.appendChild(createDiv);
  }
}

function createAnswer(){
  let p = document.createElement('p');
  p.id = 'answer';
  p.innerText = 'Escolha uma cor';
  colorGuess.appendChild(p);
}

function selectColor(event){
  let click = event.target.style.backgroundColor;
  let answer = document.getElementById('answer');
  console.log(click == colorTitle.innerText);
  if(click == colorTitle.innerText) {
    answer.innerText = 'Acertou!';
  }else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

function verifyColor() {
  let trueColor = Math.floor(Math.random()*colorBall.length);
  colorTitle.innerText = 'rgb'+createRandomColor();
  for (let index = 0; index < colorBall.length; index += 1) {
    let ball = colorBall[index];
    if(trueColor === index) {
      ball.style.backgroundColor = colorTitle.innerText;
    }    
  }
  console.log(trueColor);
}

createRandomColor();
createColorGuess(6);
createAnswer();
colorGuess.addEventListener('click', selectColor);
verifyColor();