import React from 'react';

class ProfilePhotoIndex extends React.Component {
  constructor(props){
    super(props)
  }
  renderPhotos() {
    const { photos } = this.props;
    if (photos.length < 1) {
      return;
    }

    const content = photos.map((photo) => (
      <li key={`photo-${photo.id}`}>
        <div
          className="image-button"
        >
          <img
            src={photo.image_url}
            alt={`photo-${photo.id}`}
          />
        </div>
      </li>
    ));

    return content;
  }

  render(){
    return(
      <div className="photos">
        <ul>
          {this.renderPhotos()}
        </ul>
      </div>
    )
  }
}

export default ProfilePhotoIndex;
