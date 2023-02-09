//Variáveis
const screen1 =  document.querySelector(".screen1") // Seleciona a div screen1
const screen2 = document.querySelector(".screen2") // Seleciona a div screen 2

const btnTry = document.querySelector("#btnTry") // Seleciona o botão presente na div "screen1" por meio do seu ID
const btnAgain = document.querySelector("#btnAgain") // Seleciona o botão presente na div "screen2" por meio do seu ID

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleResetClick)

//Funções callback
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber)
  {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

   xAttempts > 1 ? document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tantativas` : document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tantativa`
    
  }

  inputNumber.value = "";
  xAttempts++;
}

function handleResetClick(){
  screen2.classList.add("hide")
  screen1.classList.remove("hide")

  randomNumber = Math.round(Math.random() * 10)
  xAttempts = 1;
}
