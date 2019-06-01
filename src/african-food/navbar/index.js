import React from 'react';

const NavBar = props => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
        <a className="navbar-brand" href="#">
          <img src="https://i.postimg.cc/k5mq1Cgs/africa.png" width="30px"/>
          <span className="font-weight-bold"> African Food</span></a>
      </nav>
    </header>
  );
}

export default NavBar;