export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (text, sender) => ({
    type: SEND_MESSAGE, text, sender
});
