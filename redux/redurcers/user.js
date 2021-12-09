import { SET_USERS } from '../types';

const initialState = {
  users: ['alma']
}

const user = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USERS:
      return {
        ...state,
        users: payload
      }
    default:
      return {
        ...state
      }
  }
};

export default user;