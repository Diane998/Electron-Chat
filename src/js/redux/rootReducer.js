import { combineReducers } from 'redux';
import chatReducer from './chats/chatReducer';

export default combineReducers({ chats: chatReducer });
