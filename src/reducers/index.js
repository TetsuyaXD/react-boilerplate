import {
    GET_EVENTS
} from "../actions";

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_EVENTS:
        return { ...state, events: action.payload };
      default:
        return state;
    }
  };

export default rootReducer;