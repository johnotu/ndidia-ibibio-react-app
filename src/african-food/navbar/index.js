import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
        <Link className="navbar-brand" to="/">
          <img src="https://i.postimg.cc/k5mq1Cgs/africa.png" alt="Logo" width="30px"/>
          <span className="font-weight-bold"> African Food</span></Link>
      </nav>
    </header>
  );
}

export default NavBar;