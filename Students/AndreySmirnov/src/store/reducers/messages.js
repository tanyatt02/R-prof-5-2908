import {ADD_CHAT, ON_TEXT_CHANGE, SEND_MESSAGE, SET_CURRENT_CHAT} from "../actions/messagesAction";
import update from 'react-addons-update';

const initialState = {
    chats: {
        1: {title: 'Чат 1', messageList: [{text: "Привет!", sender: 'bot'}]},
        2: {title: 'Это чат 2', messageList: [{text: "Привет из чата 2!", sender: 'bot'}]},
        3: {title: 'А это чат 3', messageList: [{text: "Тут будет чат 3", sender: 'bot'}]},
    },

    newMessageText: '',
    currentChat: 1
};

export const msgReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {text: state.newMessageText, sender: action.sender}
            return update(state, {
                chats: {
                    $merge: {
                        [state.currentChat]: {
                            title: state.chats[state.currentChat].title,
                            messageList: [...state.chats[state.currentChat].messageList, newMessage]
                        }
                    }
                },
                newMessageText: {
                    $set: ''
                }
            });

        case ON_TEXT_CHANGE:
            return update(state, {
                newMessageText: {
                    $set: action.newMessageText
                }
            })

        case SET_CURRENT_CHAT:
            return update(state, {
                currentChat: {
                    $set: action.chatNumber
                }
            })

        case ADD_CHAT:
            const lastChat = Object.keys(state.chats).length

            return update(state, {
                chats: {
                    $merge: {
                        [lastChat + 1]: {
                            title: 'Это новый чат', messageList: [{text: "Новый чат", sender: 'bot'}]
                        }
                    }
                }
            })

        default:
            return state
    }
}