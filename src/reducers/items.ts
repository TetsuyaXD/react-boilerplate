import { IAction, IItem } from './../models/index';


export function itemsHasErrored(state = false, action: IAction) {
  switch (action.type) {
      case 'ITEMS_HAS_ERRORED':
          return action.payload.hasErrored;
      default:
          return state;
  }
}
export function itemsIsLoading(state = false, action: IAction) {
  switch (action.type) {
      case 'ITEMS_IS_LOADING':
          return action.payload.isLoading;
      default:
          return state;
  }
}
export function items(state:IItem[] = [], action: IAction) {
  switch (action.type) {
      case 'ITEMS_FETCH_DATA_SUCCESS':
          return action.payload.items;
      default:
          return state;
  }
}