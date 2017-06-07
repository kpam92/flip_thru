import React from 'react';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // debugger;
    const profileId = this.props.photo.author_id;
    // this.props.fetchUser(profileId);
    this.props.history.push(`/user/${profileId}`);
  }

  render() {
    const { image_url, user_pic, username, description, author_id } = this.props.photo;
    return (
      <div className='photo-index'>
        <header className="user-info">
          <div className='info'>
            <div className='username-link' onClick={this.handleClick}>
              <img src={user_pic}/>
              {username}
            </div>
          </div>
        </header>
        <div className='feed-photo'>
          <img src={image_url}/>
        </div>
        <div className="user-info">
          <span>{description}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoIndexItem);
