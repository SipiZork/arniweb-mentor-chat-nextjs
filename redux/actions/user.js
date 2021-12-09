import { SET_USERS, SET_USER } from '../types';

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users
});

export const setUser = (username) => ({
  type: SET_USER,
  payload: username
});