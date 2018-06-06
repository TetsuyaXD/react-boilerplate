import { createAction } from 'redux-actions';
import { IItem } from '../models';

export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';

export const itemsHasErrored = createAction(
    ITEMS_HAS_ERRORED,
    (bool: boolean) => { return {
    hasErrored: bool,
}; });

export const itemsIsLoading = createAction(
    ITEMS_IS_LOADING,
    (bool: boolean) => { return {
    isLoading: bool,
}; });

export const itemsFetchDataSuccess = createAction(
    ITEMS_FETCH_DATA_SUCCESS,
    (items: IItem[]) => { return {
    items,
}; });
