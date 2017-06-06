import merge from 'lodash/merge';

import { RECEIVE_PHOTOS } from '../actions/photo_actions';

const PhotosReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      const newPhoto = {[action.photo.id]: action.photo};
      return merge({}, state, newPhoto);
    default:
      return state;
  }
};

export default PhotosReducer;
