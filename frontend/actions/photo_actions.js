import * as APIUtil from '../util/photo_api_util'

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

export const RECEIVE_NEW_PHOTO = 'RECEIVE_NEW_PHOTO';

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});
export const receiveNewPhoto = photo => ({
  type: RECEIVE_NEW_PHOTO,
  photo
});

export const fetchPhotos = () => dispatch => (
  APIUtil.fetchPhotos().then(photos => (
    dispatch(receivePhotos(photos))
  ))
);

export const addPhoto = (photo) => dispatch => (
  APIUtil.addPhoto(photo).then(photo => (
    dispatch(receiveNewPhoto(photo))
  ))
);
