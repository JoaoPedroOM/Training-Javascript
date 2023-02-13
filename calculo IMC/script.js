// variáveis 
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

const modalWrapper = document.querySelector(".modal-wrapper")
const modalMessage = document.querySelector(".modal .title span")
const modalBtnClose = document.querySelector(".modal .title .close")

const Modal = {
  open(){
    modalWrapper.classList.add("open")
  },
  close(){
    modalWrapper.classList.remove("open")
  }
}

form.onsubmit = function(event){
  event.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value

  //Faz o teste para ver se os valores do input são números
  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)
  
  if(weightOrHeightIsNotANumber){
    AlertError.open()
    return;
  }
  AlertError.close()

  const resul = IMC(weight, height)
  const message = `Seu IMC é de ${resul}`

  modalMessage.innerText = message
  Modal.open()

}

//Error alert
const AlertError = {
  element: document.querySelector(".alert-error"),
  open(){
    AlertError.element.classList.add("open")
  },
  close(){
    AlertError.element.classList.remove("open")
  }

}
// Verifica se é um número 
function notANumber(value) {
  return isNaN(value) || value ==""
}

// Calcular o imc
function IMC(weight, height)
{
  return (weight / ((height/100) **2)).toFixed(2)
}

// Botão para fechar o modal com o resultado do IMC
modalBtnClose.onclick = () =>{
  Modal.close()
}

// Fechar modal do resultado do IMC com a tecla "esc"
window.addEventListener("keydown", handleKeydow)

function handleKeydow(event) {
  
  if(event.key === "Escape")
  {
    Modal.close()
  }
}

// Retirar o alerta de error quando digitar alguma coisa

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()