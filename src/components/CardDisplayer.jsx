import Card from './Card'
import "../styles/card-displayer.css"

const url = "https://pokeapi.co/api/v2/pokemon/"
const CardDisplayer = ({pickHandler, indexes}) => {
  return (
    <div className='card-displayer'>
        {indexes.map(index => <Card key={index} index ={index} url={url} onClick={() => pickHandler(index)}> </Card>)}
    </div>
  )
}

export default CardDisplayer