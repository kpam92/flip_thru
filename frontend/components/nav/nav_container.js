import nav from './nav';
import { connect } from 'react-redux';

import { fetchUser } from '../../actions/user_actions';
// import { allPhotos } from '../../reducers/selectors'
//
// const mapStateToProps = state => ({
//   photos: allPhotos(state),
// })
//
const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
});

export default connect(
  null,
  mapDispatchToProps
)(nav);
