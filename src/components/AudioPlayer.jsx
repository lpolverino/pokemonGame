import { useState, useEffect } from "react"
import { GiSoundOff, GiSoundOn } from "react-icons/gi";
import "../styles/music.css"

const audioT =  new Audio("op.mp3")

const AudioPlayer = () => {
  
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() =>{
    if (isPlaying){
      console.log("play");
      audioT.play()
    }
    else{
      console.log("pause");
      audioT.pause()
    }
  },[isPlaying])
  const button = isPlaying ? <GiSoundOff></GiSoundOff> : <GiSoundOn></GiSoundOn>

  return (
    <div className="music-btn" onClick={ () => setIsPlaying(!isPlaying)}>
      {button}
    </div>
  )
}

export default AudioPlayer