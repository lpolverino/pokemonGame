import './styles/App.css'
import Score from "./components/Score"
import CardDisplayer from './components/CardDisplayer'
import { useEffect, useState } from 'react'
import arrayShuffle from 'array-shuffle';
import AudioPlayer from './components/AudioPlayer';

let pokemonIndexes = ['252','255','258','261','272','289','301','306','321','330']

function App() {

  const [score,setScore] = useState(0)

  const [maxScore,setMaxScore] = useState(0)

  const [picked, setPicked] = useState([])

  const restartGame = () =>{
    console.log("restart");
    if (score > maxScore) {
      setMaxScore(score)
    }
    setScore(0)
    setPicked([])
  }

  const addPokemon = (pokemonId) => {
    const newPicked = picked.concat([pokemonId])
    setPicked(newPicked)
    setScore(score + 1)
  }

  const pickCard = (pokemonId) => {
    const alreadyPicked = picked.find(el => el === pokemonId)
    if (alreadyPicked !== undefined) {
      restartGame()
    } else{
      addPokemon(pokemonId)
    }
  }

  return (
    <>
      <div className="app">
        <Score
         actual={score}
         best = {maxScore}>
        </Score>
        <CardDisplayer pickHandler = {pickCard} indexes = {arrayShuffle(pokemonIndexes)}></CardDisplayer>
        <AudioPlayer></AudioPlayer>
      </div>
    </>
  )
}

export default App
