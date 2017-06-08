import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
class Nav extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
  }

  handleClick() {
    this.props.fetchUser(1);
    this.props.history.push(`/user/1`);
  }

  render() {
    return(
      <div className="navbar">
        <ul>
          <div className='left'>
             <li>
               <a href="#">
                 <img src="http://res.cloudinary.com/dt5viyxyq/image/upload/v1496784960/Screen_Shot_2017-06-06_at_2.35.31_PM_iexbim.png"/>
               </a>
             </li>
          </div>
           <div className='right'>
             <li>
               <a href="#">
                 <img src="http://res.cloudinary.com/dt5viyxyq/image/upload/c_scale,w_91/v1496782016/plus_icon_m3ccte.png"/>
               </a>
             </li>
             <li>
               <a onClick={this.handleClick}>
                 <img className='prof' src="http://res.cloudinary.com/dt5viyxyq/image/upload/v1475112850/1536648_10153300643313893_2943769392509528369_n_ymqsol.jpg"/>
               </a>
             </li>
           </div>
         </ul>
     </div>
    )
  }
};

export default withRouter(Nav);
