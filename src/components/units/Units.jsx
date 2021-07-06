import  images from '../home/images.js'
import style from './units.module.css'

export default function Units({name, idImg, rootImg}){

    return(
        <div className={style.card}>
            <p className={style.title}>{name}</p>
            <img className={style.image} src={ images[name] } />
        </div>
    )
}