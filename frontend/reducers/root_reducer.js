import { combineReducers } from 'redux';
import PhotosReducer from './photos_reducer';
import UsersReducer from './users_reducer';

const rootReducer = combineReducers({
  photos: PhotosReducer,
  user: UsersReducer
});

export default rootReducer;
