import { Link } from "react-router-dom";
import RightNavBar from "./RightNavBar";

//import icons from react-icons for hamburger menu and close
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Header = (props) => {
  return (
    <header className="header">
      <div className="navBar__content">
        <Link to="/">
          <h2 className="logo">Grocery App</h2>
        </Link>

        <nav className="header__content__nav">
          <ul>
            <li>
              <a href="/" className="navLink">
                Home
              </a>
            </li>

            <li>
              <a href="/" className="navLink">
                Signup
              </a>
            </li>

            <li>
              <a href="/" className="navLink">
                Login
              </a>
            </li>

            <li>
              <a href="/" className="navLink">
                Cart
              </a>
            </li>

            <li>
              <a href="/" className="navLink">
                Log out
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__toggle__content">
          <BiMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
