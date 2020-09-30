import { RSAA, getJSON } from 'redux-api-middleware'
import { normalize } from 'normalizr';
import { chats } from '../../../server/controllers/schema.js';

export const START_CHATS_LOADING = '@@chats/START_CHATS_LOADING'
export const SUCCESS_CHATS_LOADING = '@@chats/SUCCESS_CHATS_LOADING'
export const ERROR_CHATS_LOADING = '@@chats/ERROR_CHATS_LOADING'
export const ADD_CHAT = '@@chat/ADD_CHAT';

export const addChat = (title) => ({
   type: ADD_CHAT,
   title,
});

export const loadChats = () => ({
   [RSAA]: {
       endpoint: '/api/user/u-1',
       method: 'GET',
       headers: {'Content-Type': 'application/json' },
       types: [
           START_CHATS_LOADING,
           {
               type: SUCCESS_CHATS_LOADING,
               payload: (action, state, res) => getJSON(res)
                   .then(json => normalize(json, [chats]))
           },
           ERR_CHATS_LOADING
       ]
   }
});