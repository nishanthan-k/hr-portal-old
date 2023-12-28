import React, { useState } from 'react'
import "./Header.css"
import currentUser from "../../assets/data/currentUser.json"
import empData from "../../assets/data/employeesData.json"
import { Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);

  if (!currentUser[0].username) {
    console.log('no user');
    console.log(currentUser);
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
            <Button content="Logout" onClick={ () => { navigate("/") } } />
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