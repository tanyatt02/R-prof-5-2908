import { SEND_MESSAGE, sendMessage } from "../store/actions/messageActions.js";

export default store => next => (action) => {
   switch (action.type) {
       case SEND_MESSAGE:
           if (action.sender === 'Me') {
            setTimeout(() => store.dispatch(
                sendMessage(Object.keys(store.getState().msgReducer.messages).length + 1,
                'Не приставай ко мне, я робот!', 'bot', action.chatId)), 
                1000)
           }
   }
   return next(action)
}