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
              <h1 className="text-bold text-3xl text-black">
                <span className="font-sans text-pink-600 font-medium">T</span>
                Nike
              </h1>
            </div>

            <ul className="nav hidden md:flex space-x-4">
              <li className="hover:text-pink-600 font-normal transition duration-200 p-2 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-pink-600 font-normal transition duration-200 p-2 cursor-pointer">
                <Link to="/products">Products</Link>
              </li>
              <li className="hover:text-pink-600 font-normal transition duration-200 p-2 cursor-pointer">
                <Link to="/">About</Link>
              </li>
              <li className="hover:text-pink-600 font-normal transition duration-200 p-2 cursor-pointer">
                <Link to="/">Contact</Link>
              </li>
              <li className="hover:text-pink-600 font-normal transition duration-200 p-2 cursor-pointer">
                <Link to="/">Blogs</Link>
              </li>
            </ul>

            <div className="w-1/4 pl-1 search-box rounded border border-black">
              <form action="">
                <div className="flex items-center">
                  <input
                    className="outline-none px-1 text-sm w-11/12"
                    type="text"
                    placeholder="Search here..."
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="w-1/12 py-2 px-1 bg-pink-600 text-white cursor-pointer hover:bg-pink-700 transition duration-200"
                  />
                </div>
              </form>
            </div>

            <div className="actions hidden md:flex">
              <ul className="flex space-x-4">
                <li className="hover:text-pink-600 transition duration-200 p-2 cursor-pointer">
                  <FontAwesomeIcon icon={faCartShopping} />
                </li>
                <li className="hover:text-pink-600 transition duration-200 p-2 cursor-pointer">
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
