import React from 'react';

class Feed extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchPhotos()
  }

  render() {
    const { photos } = this.props;
    const photoDetails = photos.map(photo => (
        <li key={photo.id}>{photo.description}<img src={photo.image_url}/></li>

      )
    );
    // const locationIndexDetails = this.props.locations.map(location => (
    //   <IndexItem
    //     location={location}
    //     key={location.id}
    //   />
    //   )
    // );
    return(
      <div>
       <ul>
         {photoDetails}
       </ul>
     </div>
    )
  }
};

export default Feed;
