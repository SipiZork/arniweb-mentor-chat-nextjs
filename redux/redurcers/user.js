import { SET_USERS, SET_USER } from '../types';

const initialState = {
  users: [],
  username: null
}

const user = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USERS:
      return {
        ...state,
        users: payload
      }
    case SET_USER:
      return {
        ...state,
        username: payload
      }
    default:
      return {
        ...state
      }
  }
};

export default user;