import { SEND_MSG } from '../actions/messages-actions';

const storeMsg = {
    messages: [
        {
            sender: 'Vasya',
            text: 'Ciao!',
        },
        {
            sender: 'Petr',
            text: 'Hello!',
        },
        {
            sender: null,
            text: 'Privet!',
        },
        {
            sender: 'Ann',
            text: 'Guten tag!',
        }
    ]
}

export default (store = storeMsg, action) => {
    switch(action.type) {
        case SEND_MSG: {
            return { 
                //redux update magic
             }
        }

        default: return store;
    }
}