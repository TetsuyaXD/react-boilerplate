export interface IItemListProps {
    fetchData: (url: string) => void;
    items: IItem[];
    isLoading: boolean;
    hasErrored: boolean;
}

export interface IItemListState {
    items: IItem[];
    hasErrored: boolean;
    isLoading: boolean;
}

interface IItem {
    id: number;
    label: string;
}
