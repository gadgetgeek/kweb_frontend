import {Link} from "react-router-dom"

const Header = (props) => {
    return (
        <nav className="nav">
            <Link to="/">
                <div>Grocery App</div>
            </Link>
        </nav>
    )
}

export default Header;