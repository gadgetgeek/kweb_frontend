import { React, useState } from "react";
import { NavLink, Link } from "react-router-dom";



const Header = ({toggleBurgerMenu}) => {

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <Link className="nav__logo" to="/">
            Grocery App
          </Link>

          <li className="nav__list__item">
            <NavLink className="nav__link" to="/products">
              Home
            </NavLink>
          </li>

          <li className="nav__list__item">
            <NavLink className="nav__link" to="/">
              Create New
            </NavLink>
          </li>

    

          <div className="nav__button" onClick={toggleBurgerMenu}>
            <div className="nav__button__component"></div>
            <div className="nav__button__component"></div>
            <div className="nav__button__component"></div>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;