import { sendMessage, SEND_MESSAGE } from "../store/actions/messageActions";

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.sender === 'me') {
                setTimeout(() => store.dispatch(sendMessage('Автоматический ответ', 'bot', action.chatId)), 1200)
            }
    }
    return next(action);
}