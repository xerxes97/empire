export const GET_DATA = 'GET_DATA'

export function getData(payload){

    return function(dispatch){

        return fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/${payload}`)
        .then(response=>response.json()
        )
        .then(json =>{
            dispatch({type: GET_DATA, payload: json})
        })
    }
}