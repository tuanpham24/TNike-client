import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  return (
    <>
      <div className="shadow-md py-2">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-center">
            <div className="logo">
              <h1 className="text-bold text-3xl text-black">TNike</h1>
            </div>

            <ul className="nav hidden md:flex space-x-4">
              <li className="hover:text-red transition duration-200 p-2 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-red transition duration-200 p-2 cursor-pointer">
                <Link to="/products">Products</Link>
              </li>
              <li className="hover:text-red transition duration-200 p-2 cursor-pointer">
                <Link to="/">About</Link>
              </li>
              <li className="hover:text-red transition duration-200 p-2 cursor-pointer">
                <Link to="/">Contact</Link>
              </li>
              <li className="hover:text-red transition duration-200 p-2 cursor-pointer">
                <Link to="/">Blogs</Link>
              </li>
            </ul>

            <div className="search-box rounded border-b border-black py-1 px-2">
              <form action="">
                <div className="flex">
                  <input className="outline-none" type="text" />
                  <FontAwesomeIcon icon={faSearch} className="w" />
                </div>
              </form>
            </div>

            <div className="actions hidden md:flex">
              <ul className="flex space-x-4">
                <li className="hover:text-red transition duration-200 p-2 cursor-pointer">
                  <FontAwesomeIcon icon={faCartShopping} />
                </li>
                <li className="hover:text-red transition duration-200 p-2 cursor-pointer">
                  <FontAwesomeIcon icon={faUser} />
                </li>
              </ul>
            </div>

            {/* Hamburger icon for mobile */}
            <div className="md:hidden">{/* Add mobile menu icon here */}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
