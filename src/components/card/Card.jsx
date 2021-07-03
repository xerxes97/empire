import Cards from "../cards/Cards"
import style from './card.module.css'

export default function Card(){
    return(
        <div className={style.card}>
            <Cards type='Civilizaciones'/>
            <Cards type='Unidades'/>
            <Cards type='Edificios'/>
            <Cards type='Tecnologias'/>
        </div>
    )
}