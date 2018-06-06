import { IState } from './../models/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { logger } from './middleware'

export default function configureStore(initialState?:IState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(logger, thunk)
    );
}