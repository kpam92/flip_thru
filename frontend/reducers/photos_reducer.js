import merge from 'lodash/merge';

import { RECEIVE_PHOTOS, RECEIVE_PHOTO, UPDATE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_LIKE, DELETE_LIKE } from '../actions/like_actions';

const PhotosReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      const newPhoto = {[action.photo.id]: action.photo};
      return merge({}, state, newPhoto);
    case UPDATE_PHOTO:
    newState[action.photo.id - 1]= action.photo
      return newState
    case DELETE_LIKE:
      newState = {[action.like.author_id]: action.photo};
      return merge({}, state, newPhoto);
    default:
      return state;
  }
};

export default PhotosReducer;
