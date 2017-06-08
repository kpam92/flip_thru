import React from 'react';
import PhotoIndexItem from '../feed/photo_index';

import { fetchUser } from '../../util/user_api_util';

class Feed extends React.Component {
  constructor(props){
    super(props)
    this.photoDetails = []
  }

  componentWillMount() {
    this.props.fetchUser(this.props.match.params.userId)
  }
  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId)
  }

  componentWillReceiveProps(props){
    const { photos } = props.user;
    this.photoDetails = photos.map(photo => (
        <PhotoIndexItem key={photo.id} photo={photo}/>
      )
    );

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
           {this.photoDetails}
         </ul>
       </div>
     </div>
    )
  }
};

export default Feed;
