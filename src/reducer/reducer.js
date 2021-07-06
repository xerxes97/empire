import { GET_DATA } from "../actions/actions";

const initialState = {
    info:[],
    favorites:[]
}

const empire = (state = initialState, action)=>{

    switch(action.type){

        case GET_DATA:{
            return{
                ...state,
                info: action.payload
            }
        }

        default:
            return state;
    }
}

export default empire;