import React from "react";
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import '../../assets/css/navbar.css'

// icon config
library.add(faCartShopping, faUser)

function Navbar() {

  return (
    <>
      <nav className="navbar-wrapper">
        <div className="container">
          <div className="navbar flex-container">
            <div className="logo">
              <img src="https://rubee.com.vn/admin/webroot/upload/image/images/nike-logo.jpg" alt="" />
            </div>
            <ul className="nav">
              <li className="nav-item nav-item-ltr">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item nav-item-ltr">
                <Link to="/products">Products</Link>
              </li>
              <li className="nav-item nav-item-ltr">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="nav-item nav-item-ltr">
                <Link to="/about">about</Link>
              </li>
              <li className="nav-item nav-item-ltr">
                <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
              </li>
              <li className="nav-item nav-item-ltr">
                <Link to="/login"><FontAwesomeIcon icon={faUser} /></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
