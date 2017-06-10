import * as APIUtil from '../util/photo_api_util'

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const UPDATE_PHOTO = 'UPDATE_PHOTO';

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});
export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});
export const updatePhoto = photo => ({
  type: UPDATE_PHOTO,
  photo
});

export const fetchPhotos = () => dispatch => (
  APIUtil.fetchPhotos().then(photos => (
    dispatch(receivePhotos(photos))
  ))
);

export const addPhoto = (photo) => dispatch => (
  APIUtil.addPhoto(photo).then(photo => (
    dispatch(receivePhoto(photo))
  ))
);

export const fetchPhoto = (id) => dispatch => (
  APIUtil.fetchPhoto(id).then(photo => (
    dispatch(updatePhoto(photo))
  ))
);
