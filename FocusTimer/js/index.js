// default import 
import Controls from './controls.js'

// named import {}
import Timer from './timer.js'
import Sound from "./sounds.js";
import { elements } from './elements.js'

const {
  btnPlay,
  btnPause,
  btnSet,
  btnStop,
  btnSoundOff,
  btnSoundOn,
  minutesTimer,
  secondsTimer
} = elements

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

const sound = Sound()

btnPlay.addEventListener('click', function() {
  controls.play()
  timer.countDown()
  sound.pressButton()
})

btnPause.addEventListener('click', function () {
  controls.pause()
  timer.hold()
  sound.pressButton()
})

btnStop.addEventListener('click', function () {
  controls.reset()
  timer.reset()
}) 

btnSoundOn.addEventListener('click', function() {

  btnSoundOn.classList.add('hide')
  btnSoundOff.classList.remove('hide')
  sound.bgAudio.pause()
  
})

btnSoundOff.addEventListener('click', function() {
  
  btnSoundOff.classList.add('hide')
  btnSoundOn.classList.remove('hide')
  sound.bgAudio.play()

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
