import Slider from '../slider/slider.jsx'
import { Link } from 'react-router-dom'
import Card from '../card/Card.jsx'

export default function Home(){
    return(
        <div>
            <Slider />
            <Card />
        </div>
    )
}