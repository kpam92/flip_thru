import { connect } from 'react-redux';

import { fetchUser } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
