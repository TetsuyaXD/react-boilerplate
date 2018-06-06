import * as React from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../../epics/items';

//Interfaces
import {
    IItemListProps,
    IItemListState
} from './test.types'
import { IState } from '../../models';

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
    componentDidMount() {
        this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }
    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <ul>
                {this.props.items.map((item) => (
                    <li key={item.id}>
                        {item.label}
                    </li>
                ))}
            </ul>
        );
    }
}
const mapStateToProps = (state:IState) => {
    console.log(state)
    return {
        items: state.items.items,
        hasErrored: state.items.hasErrored,
        isLoading: state.items.isLoading
    };
};
const mapDispatchToProps = (dispatch:any) => {
    return {
        fetchData: (url:string) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);