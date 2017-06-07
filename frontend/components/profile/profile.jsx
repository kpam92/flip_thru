import React from 'react';
import PhotoIndexItem from '../feed/photo_index';
class Feed extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
  }

  render() {
    // const { photos } = this.props.user;
    // const photoDetails = this.props.userphotos.map(photo => (
    //     <PhotoIndexItem key={photo.id} photo={photo}/>
    //   )
    // );

    return(
      <div className='feed'>
       <ul>
         this is the profile talking
       </ul>
     </div>
    )
  }
};

export default Feed;
