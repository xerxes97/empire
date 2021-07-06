import { createStore, applyMiddleware, compose } from 'redux'
import empire from '../reducer/reducer'
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    empire, composeEnhancers(applyMiddleware(thunk))
)