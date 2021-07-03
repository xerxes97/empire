import { createStore } from 'redux'
import empire from '../reducer/reducer'

export const store = createStore(
    empire, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)