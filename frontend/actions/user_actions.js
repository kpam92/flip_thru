import * as APIUtil from '../util/user_api_util'

export const RECEIVE_USER = 'RECEIVE_USER';

export const REMOVE_USER = 'REMOVE_USER';

export const removeUser = () => ({
  type: REMOVE_USER
});


export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = (id) => dispatch => (
  APIUtil.fetchUser(id).then(user => (
    dispatch(receiveUser(user))
  ))
);
