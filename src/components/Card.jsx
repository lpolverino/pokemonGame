import { useEffect, useState } from 'react'
import "../styles/card.css"

const Card = ({index, url, onClick}) => {

    const [imageUrl, setImageUrl] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(url + index + "/")
        .then(response => response.json())
        .then(pokemon =>{
            //console.log(pokemon)
            setImageUrl(pokemon.sprites.front_default)
            setIsLoading(false)
        })
        .catch(e => console.log("error " + e + "retriving pokemon numer :" + index))
    },[index, url,onClick])
 
    if (isLoading){
        return (
        <div className='card'>
            <img src="pokemonCard.jpeg" alt="pokemon card back side" />
        </div>)
    }else{
        return(
            <div onClick={() => onClick(index)} className='card pokemon'>
                <img src={imageUrl} alt="a pokemon Image" />
            </div>
        )
    }
}

export default Card
