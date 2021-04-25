import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          {/* <svg>
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
          <Link to="/">
            <span className="ml-3 text-xl">
              <b>Quote-ccessible</b>
            </span>
          </Link>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/" className="mr-5 hover:text-gray-900">
            About
          </Link>
          <Link to="/" className="mr-5 hover:text-gray-900">
            Refresh
          </Link>
          {
              !isAuthenticated() ? <Link to="/accounts" className="mr-5 hover:text-gray-900">
              Login | Register
            </Link> : <Link to="/logout" className="mr-5 hover:text-gray-900">
              Logout
            </Link> 
          }
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
