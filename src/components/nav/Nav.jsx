import logo from '../../resources/images/empires.png'
import { NavLink, Link } from "react-router-dom"
import style from './nav.module.css'

export default function Nav(){
    return(
        <div>
            <Link to='/'><img className={style.image} src={logo} /></Link>
            <NavLink to='/'>home</NavLink>
            <NavLink to='/favorites'>favorites</NavLink>
        </div>
    )
}