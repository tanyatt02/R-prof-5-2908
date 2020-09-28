import update from 'react-addons-update';

const storeMsg = {
    chats: [
        {
            id: '1',
            title: 'Lorem'
        },
        {
            id: '2',
            title: 'Ipsum'
        },
        {
            id: '3',
            title: 'Dolor'
        },
        {
            id: '4',
            title: 'Set Amet'
        },
    ]
}

export default (store = storeMsg, action) => {
    switch(action.type) {

        default: 
            return store;
    }
}