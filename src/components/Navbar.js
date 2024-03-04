import React, {useState, useEffect} from 'react';
import './Navbar.css'
import { Link, useNavigate } from "react-router-dom";

const Navbar= () =>{
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

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
      <Link to="/contact"className="link">Contact</Link>
    </li>
    <li>
    <Link to="/home"className="link">Language</Link>
    </li>
    </div>

  </div>

  );
}
export default Navbar;