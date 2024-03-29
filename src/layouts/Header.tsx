import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import TNikeLogo from "../components/logo/TNike-logo";

const Header: React.FC = () => {
  return (
    <>
      <div className="sticky z-50 w-full top-0 bg-white shadow-md py-1">
        <div className="container mx-auto md:px-8 sm:container-2xl">
          <div className="flex justify-between items-center">
            <div className="logo">
              <TNikeLogo className="fill-black-950 header-logo"/>
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
                    className="w-1/12 py-2 px-1 bg-black-950 text-white cursor-pointer hover:bg-pink-700 transition duration-200"
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
