import Visual from "../visual/visual"
import civis from '../../resources/images/civis.png'
import buildings from '../../resources/images/edificios.jpg'
import units from '../../resources/images/unitd.png'
import tech from '../../resources/images/tech.jpg'
import style  from './style.module.css'
import { Link } from "react-router-dom"

export default function Cards({type}){
    return(
        <div className={style.cuerpo}>
            <Link to={`visual/${type}`}>
            <h4>{type}</h4>
            {
                type==='Civilizaciones' ?
                <div><img className={style.image} src={civis} alt='Civilizaciones'/></div>
                : type==='Unidades' ?
                <div><img className={style.image} src={buildings} alt='Civilizaciones'/></div>
                : type==='Edificios' ?
                <div><img className={style.image} src={units} alt='Civilizaciones'/></div>
                : type==='Tecnologias' ?
                <div><img className={style.image} src={tech} alt='Civilizaciones'/></div>
                : 
                <div>omponente vacio</div>
            }
            </Link>
        </div>
    )
}