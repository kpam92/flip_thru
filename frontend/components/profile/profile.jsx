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
    return(
      <div className='feed'>
       <ul>
         this is the profile talking
         {this.photoDetails}
       </ul>
     </div>
    )
  }
};

export default Feed;
