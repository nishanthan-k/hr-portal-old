import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import currentUser from "../../assets/data/currentUser.json";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);

  const handleLogout = () => {
    navigate("/");
    setLoggedIn(false);
  }

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
      <div>
        { loggedIn ? (
          <div>
            <Button content="Logout" onClick={ handleLogout } />
          </div>
        ) : (
          <div>
            <Button content="Login" />
          </div>
        ) }
      </div>
    </div >
  )
}

export default Header