// src/components/Navbar.js
import { Link, useLocation } from 'react-router-dom';
import { Separator } from './Separator';

function Navbar() {
    const location = useLocation();  // Get the current route

    return (
      <nav className="navbar">
        <ul>
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
        </ul>
        <Separator width={300}/>
      </nav>
    );
}

export default Navbar;
