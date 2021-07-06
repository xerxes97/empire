import Cards from "../cards/Cards"
import style from './card.module.css'

export default function Card(){
    return(
        <div className={style.card}>
            <Cards type='civilizations'/>
            <Cards type='units'/>
            <Cards type='structures'/>
            <Cards type='technologies'/>
        </div>
    )
}