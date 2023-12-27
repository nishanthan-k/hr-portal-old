import React, { useState } from 'react'
import "./Header.css"
import currentUser from "../../assets/data/currentUser.json"
import empData from "../../assets/data/employeesData.json"
import { Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);
  if (currentUser.username === "") {
    setLoggedIn(false);
    currentUser = empData.employess[0];
  }
  return (
    <div className='header-container'>
      <div className='header-content'>
        <img className='hr-logo' src={ require("../../assets/images/hr-icon.jpg") } alt="HR Logo" />
        <h2>Welcome { currentUser[0].username.toUpperCase() } !</h2>
      </div>
      <div>
        { loggedIn ? (
          <div>
            <Button content="Logout" onClick={() => {navigate("/")}}/>
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