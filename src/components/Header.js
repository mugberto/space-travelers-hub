import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
  return (
    <header>
      <div className="brand-logo"></div>
      <nav>
        <NavLink to='/rockets'>Rockets</NavLink>
      </nav>
    </header>
  );
};
