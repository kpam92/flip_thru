import * as APIUtil from '../util/photo_api_util'

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const fetchPhotos = () => dispatch => (
  APIUtil.fetchPhotos().then(photos => (
    dispatch(receivePhotos(photos))
  ))
);
