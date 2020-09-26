export const SEND_MESSAGE = '@@message/SEND';

export const sendMessage = (messageId, text, sender, chatId) => ({
   type: SEND_MESSAGE,
   messageId,
   text,
   sender,
   chatId,
});