import { IAction, IItem } from './../models/index';


interface IItemState {
    items: IItem[],
    hasErrored: boolean,
    isLoading: boolean
}

const initialState: IItemState = {
    items: [],
    hasErrored: false,
    isLoading: false
}

export default function items(state = initialState, action: IAction) {
    console.log(state, action)
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return {...state, hasErrored: action.payload.hasErrored};
        case 'ITEMS_IS_LOADING':
            return {...state, isLoading: action.payload.isLoading};
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return{...state, items: action.payload.items};
        default:
            return state;
    }
  }