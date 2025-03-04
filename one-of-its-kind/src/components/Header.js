import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { FaBars } from "react-icons/fa";

const Header = ({ isLoggedIn, handleLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Get the current path
  const currentPath = location.pathname;

  return (
    <header className="top-bar">
      <div className="company-name">One of its Kind</div>

      <div className="icon-links">
        {/* Burger Menu Icon */}
        <FaBars className="icon burger-icon" onClick={toggleDropdown} />

        {/* Dropdown Menu */}
        {showDropdown && (
          <div className="dropdown-menu">
            {!isLoggedIn ? (
              <>
                {currentPath !== "/" && (
                  <Link
                    to="/"
                    className="dropdown-item"
                    onClick={toggleDropdown}
                  >
                    Home
                  </Link>
                )}
                {currentPath !== "/login" && (
                  <Link
                    to="/login"
                    className="dropdown-item"
                    onClick={toggleDropdown}
                  >
                    Login
                  </Link>
                )}
                {currentPath !== "/signup" && (
                  <Link
                    to="/signup"
                    className="dropdown-item"
                    onClick={toggleDropdown}
                  >
                    Sign Up
                  </Link>
                )}
                {currentPath !== "/shop" && (
                  <Link
                    to="/shop"
                    className="dropdown-item"
                    onClick={toggleDropdown}
                  >
                    Shopping
                  </Link>
                )}
                {currentPath !== "/interest-calculator" && (
                  <Link
                    to="/interest-calculator"
                    className="dropdown-item"
                    onClick={toggleDropdown}
                  >
                    Interest Calculator
                  </Link>
                )}
                {currentPath !== "/legal" && (
                  <Link
                    to="/legal"
                    className="dropdown-item"
                    onClick={toggleDropdown}
                  >
                    Legal
                  </Link>
                )}
              </>
            ) : (
              <>
                {currentPath !== "/" && (
                  <Link
                    to="/"
                    className="dropdown-item"
                    onClick={toggleDropdown}
                  >
                    Home
                  </Link>
                )}
                {currentPath !== "/profile" && (
                  <Link
                    to="/profile"
                    className="dropdown-item"
                    onClick={toggleDropdown}
                  >
                    My Profile
                  </Link>
                )}
                {currentPath !== "/shop" && (
                  <Link
                    to="/shop"
                    className="dropdown-item"
                    onClick={toggleDropdown}
                  >
                    Shopping
                  </Link>
                )}
                {currentPath !== "/interest-calculator" && (
                  <Link
                    to="/interest-calculator"
                    className="dropdown-item"
                    onClick={toggleDropdown}
                  >
                    Interest Calculator
                  </Link>
                )}
                {currentPath !== "/legal" && (
                  <Link
                    to="/legal"
                    className="dropdown-item"
                    onClick={toggleDropdown}
                  >
                    Legal
                  </Link>
                )}
                <button
                  className="dropdown-item"
                  onClick={() => {
                    handleLogout();
                    toggleDropdown();
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
