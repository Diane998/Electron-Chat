import { FETCH_CHATS } from './chatActionTypes';
import * as api from '../../api/chats';

export const fetchChats = () => async dispatch => {
  const chats = await api.fetchChats();
  dispatch({ type: FETCH_CHATS, payload: chats });
};
