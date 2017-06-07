import React from 'react';
import { Link } from 'react-router-dom';

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const profileId = this.props.photo.author_id;
    this.props.history.push(`/profile/${profileId}`);
  }

  render() {
    const { image_url, user_pic, username, description, author_id } = this.props.photo;
    return (
      <div className='photo-index'>
        <header className="user-info">
          <div className='info'>
            <Link to={`/user/${author_id}`} className='username-link'>
              <img src={user_pic}/>
              {username}
            </Link>
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

export default (PhotoIndexItem);
