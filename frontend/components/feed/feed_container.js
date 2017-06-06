import Feed from './feed';
import { connect } from 'react-redux';

import { fetchPhotos } from '../../actions/photo_actions';
import { allPhotos } from '../../reducers/selectors'

const mapStateToProps = state => ({
  photos: allPhotos(state),
})

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
