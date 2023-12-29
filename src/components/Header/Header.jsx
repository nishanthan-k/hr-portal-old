import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import currentUser from "../../assets/data/currentUser.json";
import "./Header.scss"
import SideBar from '../SideBar/SideBar';

const Header = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);
  const [showSideBar, setShowSideBar] = useState(false);

  const handleLogout = () => {
    navigate("/login");
    setLoggedIn(false);
  }

  const toggleSideBar = () => setShowSideBar(!showSideBar);

  return (
    <div className='header-container'>
      <div className='header-content'>
        <img className='hr-logo' src={ require("../../assets/images/hr-icon.jpg") } alt="HR Logo" />
        { currentUser[0].username ? (
          <h2>Welcome { currentUser[0].username.toUpperCase() }</h2>
        ) : (
          <h2>Welcome User</h2>
        ) }
      </div>
      <div className='header-functions'>
        { loggedIn ? (
          <div className='header-buttons'>
            <div className='logout-btn'>
              <Button content="Logout" onClick={ handleLogout } />
            </div>
            { !showSideBar && <div className='toggle-bar' onClick={ toggleSideBar }>
              <Icon name='bars' size='big' className='toggle-icon' />
            </div> }
          </div>
        ) : (
          <div>
            <Button content="Login" />
          </div>
        ) }
        { showSideBar && (
          <div className='show-sidebar'>
            <div className='close-icon'>
              <Icon name="close" size='big' onClick={toggleSideBar} />
            </div>
            <SideBar />
          </div>) }
      </div>
    </div >
  )
}

export default Header