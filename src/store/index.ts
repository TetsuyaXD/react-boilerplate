import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { IState } from './../models/index';
import { logger } from './middleware';

export default function configureStore(initialState?: IState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(logger, thunk),
    );
}
