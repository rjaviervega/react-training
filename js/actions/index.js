export const ADD_CARD = 'ADD_CARD';
export const ADD_LIST = 'ADD_LIST';

export function addCard(id, text, listId) {
    return {
        type: ADD_CARD,
        card: {
            id: id,
            text: text,
            listId: listId
        }
    };
}

export function addList(id, title) {
    return {
        type: ADD_LIST,
        list: {
            id: id,
            title: title,
            cards: []
        }
    };
}
