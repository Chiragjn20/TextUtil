import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className= { ` navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} ` } >
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
      
   <div className="custom-control custom-switch text-light">
  <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" id="customSwitches"/>
  <label className="custom-control-label"  htmlfor="customSwitches">Enable dark mode</label>
</div>
      </div>
    </div>
  </nav>
  )
  ;
}


Navbar.prototype ={
    title : PropTypes.string.isRequired
}

Navbar.defaultProps ={
    title : " default-title"
}