import { connect } from 'react-redux';

import { fetchUser } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = (state, { match }) => {
  userId: parseInt(match.params.userId);
  photos: state.user.photos
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
