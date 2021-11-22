import { Link } from "react-router-dom";
//import icons from react-icons for hamburger menu and close
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header navBar content">
        <Link to="/">
          <h2 className="header content logo">Grocery App</h2>
        </Link>

        <nav className="header content nav">
          <ul>
            <li>
              <a href="/products">
                Home
              </a>
            </li>

            <li>
              <a href="/signup">
                Signup
              </a>
            </li>

            <li>
              <a href="/login">
                Login
              </a>
            </li>

            <li>
              <a href="/cart">
                Cart
              </a>
            </li>

            <li>
              <a href="/">
                Log out
              </a>
            </li>
          </ul>
        </nav>
        <div className="header toggle content">
          <BiMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
