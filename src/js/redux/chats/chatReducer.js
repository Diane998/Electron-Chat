import { FETCH_CHATS } from './chatActionTypes';

const INITIAL_STATE = {
  items: []
};

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CHATS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default chatReducer;
