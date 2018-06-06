export interface IAction {
    type: string;
    payload: any;
}

export interface IEvent {
    ID: string;
    title: string;
    presentor: string;
    description: string;
    dateBegin: string;
    dateEnd: string;
    featured: boolean;
    live: boolean;
}

export interface IState {
    items: any;
    itemsHasErrored: any;
    itemsIsLoading: any;
}

export interface IItem {
    id: number;
    label: string;
}
