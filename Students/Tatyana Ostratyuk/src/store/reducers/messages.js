import update from 'react-addons-update';

import { SEND_MSG } from '../actions/messages-actions';

const storeMsg = {
    messages: [
        {
            sender: 'Darth Vader',
            text: 'Hello Redux'
        },
        {
            sender: 'Darth Vader',
            text: 'I am your father'
        },
        {
            sender: null,
            text: 'Noooo'
        },
        {
            sender: null,
            text: 'Nooooooo'
        }
    ]
}

export default (store = storeMsg, action) => {
    switch(action.type) {
        case SEND_MSG: {
            let { text, sender } = action;
            let newMsg = { text, sender };
            return update(store, { messages: { $push: [newMsg] } })
        }

        default: 
            return store;
    }
}