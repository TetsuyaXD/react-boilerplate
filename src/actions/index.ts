import { IItem } from "../models";

export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';

export function itemsHasErrored(bool:boolean) {
    return {
        type: ITEMS_HAS_ERRORED,
        payload: {
            hasErrored: bool
        }
    };
}
export function itemsIsLoading(bool:boolean) {
    return {
        type: ITEMS_IS_LOADING,
        payload: {
            isLoading: bool
        }
    };
}
export function itemsFetchDataSuccess(items:IItem[]) {
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
        payload: {
            items
        }
    };
}
