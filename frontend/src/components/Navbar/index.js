import { useStoreActions, useStoreState } from "easy-peasy";
import React from "react";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated } from "../auth";
import logo from "../Explore/png.png";

const Navbar = () => {
  const isLoggedIn = useStoreState((state) => state.isLoggedIn);
  const action = useStoreActions((action) => action.handleIsLoggedIn);
  const logout = () => {
    if(isAuthenticated()){
      localStorage.removeItem("token");
      action(false);
      return <Redirect to="/" />;
    }
  };
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          {/* <svg>
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
          <Link to="/">
            <span className="ml-3 text-xl">
              <img className="logo" src={logo} alt="logo" />
              <b>uote-ccessible</b>
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
          {!isLoggedIn ? (
            <Link to="/accounts" className="mr-5 hover:text-gray-900">
              Login | Register
            </Link>
          ) : (
            <div
              onClick={logout}
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              Logout
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
