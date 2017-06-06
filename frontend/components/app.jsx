import React from 'react';




const App = () => (
  <div>
    this is the app talking
  </div>
);

export default App;

// import React from 'react';
// import { Route, Switch } from 'react-router-dom';
//
// import NavContainer from './nav/nav_container';
// import FeedContainer from './feed/feed_container';
// import ProfileContainer from './profile/profile_container';
// import Account from './account/account';
// import UploadModal from './nav/upload_modal';
//
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <NavContainer />
//
//         <Switch>
//           <Route path="/account/:formType" component={Account} />
//           <Route path="/user/:userId" component={ProfileContainer} />
//           <Route path="/" component={FeedContainer} />
//         </Switch>
//
//         <div className="floating-upload">
//           <UploadModal floatingUpload={true} />
//         </div>
//       </div>
//     );
//   }
// }
//
// export default App;
