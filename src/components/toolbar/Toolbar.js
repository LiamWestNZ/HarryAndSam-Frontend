import React, {useState} from 'react';
import { Link, withRouter, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import logo from './logo.svg';
import * as actions from '../../store/actions/auth'


import './Toolbar.scss';




export function Toolbar(props){

    
    const navLinks = [
        {
            text: 'Dashboard',
            path: '/',
            icon: 'ion-ios-home'
        },
        {
          text: 'Booking',
          path: '/booking',
          icon: 'ion-ios-calendar'
        },
        {
            text: 'Pets',
            path: '/pets', 
            icon: 'ion-ios-paw',
          },
          {
            text: 'Profile',
            path: '/profile',
            icon: 'ion-ios-person'
          }]

    const {background, hoverBackground, linkColor, handleListCB} = props
    const [ hoverIndex, setHoverIndex ] = useState(-1)
    const [navOpen, setNavOpen ] = useState(false)
    return (
    <nav
        className="responsive-toolbar"
        style={{ background }}>
         <ul 
         style={{ background }}
         className={ navOpen ? 'active' : ''}>
            <figure onClick={ () => setNavOpen(!navOpen) }>
                <img src={logo} height="40px" width="40px" alt="logo-nav-toggler"/>
            </figure>
             {navLinks.map((link, index) => 
            
             <li
                key={ index }
                onMouseEnter={ () => setHoverIndex(index)}
                onMouseLeave={ () => setHoverIndex(-1)}
                style={{ background: hoverIndex === index ? (hoverBackground || '#cbe4f7') : ''}}
             >
                 <Link 
                 to={link.path} 
                 style={{ color: linkColor}}>
                    {link.text}
                 <i className={link.icon} />
                 </Link>
                 
             </li>
                    
                )
             }
             <li
                onMouseEnter={ () => setHoverIndex(props.index)}
                onMouseLeave={ () => setHoverIndex(-1)}
                style={{ background: hoverIndex === props.index ? (hoverBackground || '#cbe4f7') : ''}}
                >
                <button onClick={props.logout} className="nav-link btn btn-info btn-sm text-light">Logout</button>
                
                </li>
         </ul>
    </nav>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}


export default withRouter(connect(null, mapDispatchToProps)(Toolbar));
