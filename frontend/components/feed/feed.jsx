import React from 'react';
import { withRouter } from 'react-router-dom';

import PhotoIndexItem from './photo_index';
class Feed extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchPhotos()
  }

  render() {
    const { photos, addLike, destroyLike } = this.props;
    const photoDetails = photos.map(photo => (
        <PhotoIndexItem key={photo.id} photo={photo} destroyLike={destroyLike} addLike={addLike}/>
      )
    );

    return(
      <div className='feed'>
       <ul>
         {photoDetails}
       </ul>
     </div>
    )
  }
};

export default withRouter(Feed);
