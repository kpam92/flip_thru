import React from 'react';
import PhotoIndexItem from '../feed/photo_index';
import ProfilePhotoIndex from './profile_photo_index';

import { fetchUser } from '../../util/user_api_util';

class Feed extends React.Component {
  constructor(props){
    super(props)
    this.photoDetails = []
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId)
  }

  componentWillUnmount(){
    this.props.removeUser();
  }

  componentWillReceiveProps(props){
    const { photos } = props.user;
    this.photoDetails = photos;

  }

  render() {
    const { user } = this.props
    return(
      <div className='profile'>
        <div className='prof-container'>
          <div className='prof-header'>
            <div className='prof-pic'>
              <img src={user.profile_pic}/>
            </div>
            <div className='prof-info'>
              <div className='user-title'>
                {user.username}
              </div>
            </div>
          </div>
         <ul>
           <ProfilePhotoIndex photos={this.photoDetails}/>
         </ul>
       </div>
     </div>
    )
  }
};

export default Feed;
