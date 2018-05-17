import { IState } from './../models/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState?:IState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}