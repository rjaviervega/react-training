import React from 'react';
import { TrelloList } from './list';
import { connect } from 'react-redux';
import { addList, addCard } from '../actions/index';

 class Trello extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const list = this.props.lists;
        return (
            <div>
                {list.map((item)=>{
                        return <TrelloList key={item.id} id={item.id} title={item.title} cards={item.cards} />
                })}
                <button onClick={()=>{
                    this.props.dispatch(addList(3, 'New List 3'));
                }}>Add list</button>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        lists: state.lists
    };
}

export default connect(mapStateToProps)(Trello);
