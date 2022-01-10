import React,{useState} from 'react';
import {Link,Route,BrowserRouter,Routes} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
    return (
        <>
          <nav className="navbar">
              <div className="navbar-container">
                  <Link to='/'>
                      TRVL <i className='fab fa-typo3'/>
                  </Link>
                  <Link to='/home'> Home</Link>
              </div>
          </nav>  
        </>
    )
}

export default Navbar;
