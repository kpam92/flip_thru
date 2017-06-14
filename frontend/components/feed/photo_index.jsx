import React from 'react';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.state = { condition: this.props.photo.likes[1] === undefined ? ' unliked' : ' liked'}
  }

  handleClick() {
    const profileId = this.props.photo.author_id;
    this.props.history.push(`/user/${profileId}`);
  }

  handleLikeClick(){
    if (this.state['condition'] === ' liked'){
      debugger;
      this.props.destroyLike(this.props.photo.likes[1][0])
      this.setState({ condition: ' unliked'})
    } else {
      debugger;
      this.props.addLike({"author_id": 1, "photo_id": this.props.photo.id})
      this.setState({ condition: ' liked'})
    }
  }

  render() {
    const { image_url, user_pic, username, description, author_id, likes } = this.props.photo;
    // const condition = this.state['condition'] === undefined ? ' unliked' : ' liked'
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
          <div className={'heart' + this.state['condition']} onClick={this.handleLikeClick}/>
          <span>{description}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoIndexItem);
