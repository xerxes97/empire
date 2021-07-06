import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getData } from '../../actions/actions'
import Units from '../units/Units'
import { Link } from 'react-router-dom'
import style from './visual.module.css'


// export default function Visual({section}){
function Visual(props){

    useEffect(()=>{
        props.getData(props.section)
    }, [])
    console.log("aqui")
    console.log(props.section)
    return(
        <div>
            componente visual: {props.section}
            <div className={style.content}>
                {
                    props.state.civilizations && props.state.civilizations.map(entity=>(
                        <Link className={style.card} key={entity.id} to={`/details/${entity.id}`}>
                            <Units name={entity.name} idImg={entity.id} rootImg={props.section}/>
                        </Link>                    
                    ))
                }
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return{
        state: state.info
    }
}

export default connect(mapStateToProps, {getData})(Visual)