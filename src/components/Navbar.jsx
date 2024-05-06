import { Link } from "react-router-dom";
import { useState } from "react"; 
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Navbar.css";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true); 
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const handleNavItemClick = () => {
    if (!collapsed) {
      setCollapsed(true); 
    }
  };
  

  return (
    <section id="navbar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            My Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
          </button>
          <div
            className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  aria-current="page"
                  onClick={handleNavItemClick} 
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/store"
                  onClick={handleNavItemClick}  
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  onClick={handleNavItemClick} 
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
