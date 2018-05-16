export interface IItemListProps {
    textA: string
}

export interface IItemListState {
    items: IItem[]
    hasErrored: boolean
    isLoading: boolean
}

interface IItem {
    id: number
    label: string
}