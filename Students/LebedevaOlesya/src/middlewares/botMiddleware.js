import { SEND_MESSAGE, sendMessage } from "../store/actions/messageActions.js";
import { ADD_CHAT } from '../store/actions/chatActions.js';

export default store => next => (action) => {
   switch (action.type) {
       case SEND_MESSAGE: {
           if (action.sender === 'Me') {
            // setTimeout(() => store.dispatch(
                // sendMessage(Object.keys(store.getState().messageReducer.messages).length + 1,
                // 'Не приставай ко мне, я робот!', 'bot', action.chatId)), 
                // 1000)
                setTimeout(() => store.dispatch(sendMessage(Object.keys(store.getState().messageReducer.messages).length + 1, 'Не приставай ко мне, я робот!', 'bot', action.chatId)), 
                1000);
           }
           break;
        }
        case ADD_CHAT: {
            //console.log(store.getState().messageReducer.chats);
            break;
        }
    }
   return next(action)
}