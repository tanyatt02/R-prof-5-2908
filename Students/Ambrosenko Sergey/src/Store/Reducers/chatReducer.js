import update from 'react-addons-update';
import { SEND_MESSAGE } from '../Actions/messageActions';
import { ADD_CHAT } from "../Actions/chatActions";

const initialStore = {
    chats: {
            1: { title: 'МТС', messageList: [1] },
            2: { title: 'Ростелеком', messageList: [2] },
            3: { title: 'Сбербанк', messageList: [3] },
        },
};

export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                chats: { $merge: { [action.chatId]: {
                    title: store.chats[action.chatId].title,
                    messageList: [...store.chats[action.chatId].messageList, action.messageId]
                } } },
            });
        }
        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;
            return update(store, {chats: { $merge: {[chatId]: {title: action.title, messageList: []} } },
            });
        }
        default:
            return store;
    }
}