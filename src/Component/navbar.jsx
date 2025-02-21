import { Link } from "react-router-dom";
import '../css/Navbar.css'

function Navbar (){

    return <div className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>

        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link"> Home</Link>
            <Link to="/fav" className="nav-link"> Favorite</Link>
        </div>
    </div>
}

export default Navbar