import { apiMiddleware } from 'redux-api-middleware';
import botMiddleware from './botMiddleware.js';

export default [
    apiMiddleware,
    botMiddleware,
];