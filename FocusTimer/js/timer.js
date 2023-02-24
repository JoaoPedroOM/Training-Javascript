import Sounds from "./sounds.js"

export default function Timer({
  minutesTimer,
  secondsTimer,
  resetControls,
  minutes
}){

  let timerTimeOut


function updateTimer(newMinutes, seconds){
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  minutesTimer.textContent = String(newMinutes).padStart(2, "0")
  secondsTimer.textContent = String(seconds).padStart(2, "0")
}

function reset(){
  updateTimer(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countDown() {
  timerTimeOut = setTimeout(function () {
    let seconds =  Number(secondsTimer.textContent) 
    let minutes = Number(minutesTimer.textContent)
     
    updateTimer(minutes, 0)

    if (minutes <= 0 && seconds <=0) {
      resetControls()
      updateTimer()
      Sounds().timeEnd()
      return
    }

    if(seconds <= 0){
      seconds = 60
      --minutes
    }
    
    updateTimer(minutes, String(seconds - 1))

    countDown()
  }, 1000)
}

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  return{
    countDown,
    reset,
    updateTimer,
    updateMinutes,
    hold
  }

}