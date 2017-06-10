import Feed from './feed';
import { connect } from 'react-redux';

import { fetchPhotos } from '../../actions/photo_actions';
import { destroyLike, addLike } from '../../actions/like_actions';
import { fetchUser } from '../../actions/user_actions';
import { allPhotos } from '../../reducers/selectors'

const mapStateToProps = state => ({
  photos: allPhotos(state),
})

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  addLike: (like) => dispatch(addLike(like)),
  destroyLike: (id) => dispatch(destroyLike(id)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
