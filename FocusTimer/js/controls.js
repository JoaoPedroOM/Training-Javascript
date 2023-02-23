export default function Controls({
  btnPlay,
  btnPause,
  btnSet,
  btnStop
}){
  
  function play(){
      
  btnPlay.classList.add('hide')
  btnPause.classList.remove('hide')

  btnSet.classList.add('hide')
  btnStop.classList.remove('hide')

  }

  function pause() {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
  }
  function reset(){
  
    btnPlay.classList.remove('hide')
      btnPause.classList.add('hide')
      btnSet.classList.remove('hide')
      btnStop.classList.add('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos deseja estudar ? ') 
    if(!newMinutes){
      timer.resetTimer()
      return false
    }
  
    return newMinutes
  
  }

  return {
    reset, 
    play,
    pause,
    getMinutes
  }

}
