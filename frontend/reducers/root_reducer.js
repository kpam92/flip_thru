import { combineReducers } from 'redux';
import PhotosReducer from './photos_reducer';

const rootReducer = combineReducers({
  photos: PhotosReducer
});

export default rootReducer;
