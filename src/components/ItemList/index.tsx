import * as React from 'react';

//Interfaces
import {
    IItemListProps,
    IItemListState
} from './test.types'

const initState = {
    items: [
        {
            id: 1,
            label: 'List item 1'
        },
        {
            id: 2,
            label: 'List item 2'
        },
        {
            id: 3,
            label: 'List item 3'
        },
        {
            id: 4,
            label: 'List item 4'
        }
    ],
    hasErrored: false,
    isLoading: false
}

class ItemList extends React.Component<IItemListProps, IItemListState> {
    constructor(props: IItemListProps) {
        super(props)
        this.state = initState
    }
    render() {
        if (this.state.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.state.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <ul>
                {this.state.items.map((item) => (
                    <li key={item.id}>
                        {item.label}
                    </li>
                ))}
            </ul>
        );
    }
}
export default ItemList;