import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavContainer from './nav/nav_container';
import FeedContainer from './feed/feed_container';
import ProfileContainer from './profile/profile_container';


class App extends React.Component {
  render() {
    return (
      <div>
        <NavContainer />

        <Switch>
          <Route path="/" component={FeedContainer} />
          <Route path="/user/:userId" component={ProfileContainer} />
        </Switch>

      </div>
    );
  }
}

export default App;
