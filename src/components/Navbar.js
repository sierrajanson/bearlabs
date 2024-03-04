import React from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar= () =>{

  const handleLanguageClick = () => {


  }
  return (
  <div className="link_container">
    <li className="logo">
      <Link to="/"className="link"><b>Bear</b>Labs</Link>
    </li>
    <div className="nav_right">
    <li>
      <Link to="/"className="link">Home</Link>
    </li>
    <li>
      <Link to="/"className="link">Contact</Link>
    </li>
    <li>
        <select className="nav_language_button" name="Language" onclick={handleLanguageClick}> 
            <option value="english"><Link to="/">English</Link></option>
            <option value="kannada"><Link to="/home_kn">ಕನ್ನಡಿ</Link></option>
        </select>
    </li>
    </div>

  </div>

  );
}
export default Navbar;