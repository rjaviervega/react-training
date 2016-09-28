import { ADD_CARD, ADD_LIST } from '../actions/index';


// Can be any type of object
const initialState = {
    lists: [
        {
            id: 0,
            title: 'First list',
            cards: [{id: 0, text: 'Example card'}, {id: 1, text: 'Another card'}]
        },
        {
            id: 1,
            title: 'Second list',
            cards: [{id: 0, text: 'Example card'}, {id: 1, text: 'Another card'}]
        }
    ]
}

export default function reducer(state=initialState, action) {

    if (action.type === ADD_CARD) {

    }

    if (action.type === ADD_LIST) {
        return Object.assign({}, state, {
            lists: state.lists.concat(action.list)
        });
    }

    return state;
}
