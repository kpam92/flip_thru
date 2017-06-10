import * as APIUtil from '../util/like_api_util'
import { fetchPhoto } from './photo_actions'
export const RECEIVE_LIKE = 'ADD_LIKE';
export const DELETE_LIKE = 'DELETE_LIKE';


export const receiveLike = photos => ({
  type: RECEIVE_LIKE,
  photos
});
export const removeLike = like => ({
  type: DELETE_LIKE,
  like
});

export const destroyLike = (id) => dispatch => (
  APIUtil.destroyLike(id).then(like => (
    dispatch(fetchPhoto(like.author_id))
  ))
);

export const addLike = (like) => dispatch => (
  APIUtil.addLike(like).then(like => (
    dispatch(fetchPhoto(like.author_id))
  ))
);
