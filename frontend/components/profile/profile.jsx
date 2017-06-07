import React from 'react';
import PhotoIndexItem from '../feed/photo_index';

import { fetchUser } from '../../util/user_api_util';

class Feed extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount() {
    // console.log(lala)
    this.props.fetchUser(this.props.match.params.userId)
    // const user = fetchUser(this.props.match.params.userId).then(suc => suc.photos.map(photo => (
    //     return photo.image_url
    //   )
    // ))
    // console.log(user)

  }

  render() {
    // const user = fetchUser(this.props.match.params.userId).then(suc => suc.photos.map(photo => (
    //     <PhotoIndexItem key={photo.id} photo={photo}/>
    //   )
    // ))
    // const { photos } = this.props.user;
    // const photoDetails = user.photos.map(photo => (
    //     <PhotoIndexItem key={photo.id} photo={photo}/>
    //   )
    // );
    return(
      <div className='feed'>
       <ul>
         this is the profile talking
         {}
       </ul>
     </div>
    )
  }
};

export default Feed;
