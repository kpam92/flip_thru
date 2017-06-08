import { connect } from 'react-redux';

import { fetchUser, removeUser } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  removeUser: () => dispatch(removeUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
