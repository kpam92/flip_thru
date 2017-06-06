import React from 'react';

class Nav extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return(
      <div className="navbar">
        <ul>
           <li><a className="active" href="#home">Home</a></li>
           <li><a href="#news">News</a></li>
           <li><a href="#contact">Contact</a></li>
           <li><a href="#about">About</a></li>
           <li><img src="http://res.cloudinary.com/dt5viyxyq/image/upload/c_scale,w_91/v1496782016/plus_icon_m3ccte.png"/></li>
         </ul>
     </div>
    )
  }
};

export default Nav;
