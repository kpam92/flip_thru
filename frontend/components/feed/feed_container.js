import Feed from './feed';
import { connect } from 'react-redux';

import { fetchPhotos } from '../../actions/photo_actions';
import { fetchUser } from '../../actions/user_actions';
import { allPhotos } from '../../reducers/selectors'

const mapStateToProps = state => ({
  photos: allPhotos(state),
})

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  fetchUser: (id) => dispatch(fetchUser(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
