import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Images/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <img src={logo} alt="" />
          <Link className="navbar-brand ms-1 fs-4" to="/">
            Freshta Management System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navList">
              <li className="my-auto">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  to="/home"
                >
                  Home
                </NavLink>
              </li>

              {user && (
                <>
                  <li className="my-auto">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active-link" : "link"
                      }
                      to="/manageInventories"
                    >
                      Manage Item
                    </NavLink>
                  </li>

                  <li className="my-auto">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active-link" : "link"
                      }
                      to="/addItem"
                    >
                      Add Item
                    </NavLink>
                  </li>

                  <li className="my-auto">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active-link" : "link"
                      }
                      to="/myItem"
                    >
                      My Items
                    </NavLink>
                  </li>
                </>
              )}

              <li className="my-auto">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  to="/blogs"
                >
                  Blogs
                </NavLink>
              </li>

              <li>
                {user ? (
                  <button
                    className="btn btn-primary signout-btn"
                    onClick={handleSignOut}
                  >
                    SignOut
                  </button>
                ) : (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active-link" : "link"
                    }
                    to="/signIn"
                  >
                    Sign In
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
