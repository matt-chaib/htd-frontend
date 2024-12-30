// src/components/Navbar.js
import { Link, useLocation } from 'react-router-dom';
import { Separator } from './Separator';

function Navbar() {
    const location = useLocation();  // Get the current route

    return (
      <nav className="navbar">
        <ul>
          <div className="nav-buttons">
          <li>
            <Link
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About
            </Link>
          </li>
          </div>
          <div className='navbar-title'>
          {/* <h2>#deep</h2> */}
          <img style={{height: "58px"}}src="public/favicon-96x96.png"></img>
          </div>
        </ul>
        <Separator />
      </nav>
    );
}

export default Navbar;
