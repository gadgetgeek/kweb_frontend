import { Link } from "react-router-dom";
//import react-icons for hamburger menu and close
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header navBar content">
        <Link to="/">
          <h2 className="header content logo">
            Grocery App
          </h2>
        </Link>

        <nav className="header content nav">
          <ul>
            <li><Link to="/shop">Home</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/">Log out</Link></li>
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
