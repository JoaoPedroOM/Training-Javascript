// default import 
import Controls from './controls.js'

// named import {}
import Timer from './timer.js'


let btnPlay = document.querySelector('.play')
let btnPause = document.querySelector('.pause')
let btnSet = document.querySelector('.set')
let btnStop = document.querySelector('.stop')
let btnSoundOn = document.querySelector('.sound-on')
let btnSoundOff = document.querySelector('.sound-off')

const minutesTimer = document.querySelector('.minutes')
const secondsTimer = document.querySelector('.seconds')


const controls = Controls({
  btnPlay,
  btnPause,
  btnSet,
  btnStop
})

const timer = Timer({
  minutesTimer,
  secondsTimer,
  resetControls: controls.reset
})


btnPlay.addEventListener('click', function() {
  controls.play()
  timer.countDown()

})

btnPause.addEventListener('click', function () {
  controls.pause()
  timer.hold()
})

btnStop.addEventListener('click', function () {
  controls.reset()
  timer.reset()
}) 

btnSoundOn.addEventListener('click', function() {

  btnSoundOn.classList.add('hide')
  btnSoundOff.classList.remove('hide')

})

btnSoundOff.addEventListener('click', function() {

  btnSoundOff.classList.add('hide')
  btnSoundOn.classList.remove('hide')

})

btnSet.addEventListener('click', function () {

  let newMinutes = controls.getMinutes()

  if(!newMinutes){
    timer.reset()
    return
  }

  timer.updateTimer(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})
