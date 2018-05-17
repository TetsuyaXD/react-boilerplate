import { 
    itemsIsLoading,
    itemsFetchDataSuccess,
    itemsHasErrored
} from "../actions";

export function itemsFetchData(url:string) {
    return (dispatch:any) => {
        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}