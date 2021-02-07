import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {scoreReducer} from "./scoreReducer";

// thunk allows async use of dispatch - needed for making API calls through redux
const middleware = [thunk];
// redux devtools
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default function configureStore() {
    return createStore(scoreReducer, composeEnhancers(applyMiddleware(...middleware)));
}