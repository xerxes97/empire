import { connect } from 'react-redux'

// export default function Visual({section}){
function Visual({section, state}){

    console.log(state)
    return(
        <div>
            componente visual
        </div>
    )
}

function mapStateToProps(state){
    return{
        state: state.info
    }
}

export default connect(mapStateToProps, null)(Visual)