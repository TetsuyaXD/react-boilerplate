import { IAction, IState } from './../models';
import {
    GET_EVENTS
} from "../actions";

const initialState: IState = {
  events: []
};

const rootReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
      case GET_EVENTS:
        return { ...state, events: action.payload };
      default:
        return state;
    }
  };

export default rootReducer;