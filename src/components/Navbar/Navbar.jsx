import React from "react";
import logo from "../../assets/logo.png";
import github from "../../assets/github.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="navbar max-w-7xl mx-auto px-4">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <div
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "gradient-item border-b-2 border-[#632EE3] p-2 gradient-text"
                      : "gradient-item p-2"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/apps"
                  className={({ isActive }) =>
                    isActive
                      ? "gradient-item border-b-2 border-[#632EE3] p-2 gradient-text"
                      : "gradient-item p-2"
                  }
                >
                  Apps
                </NavLink>
                <NavLink
                  to="/installation"
                  className={({ isActive }) =>
                    isActive
                      ? "gradient-item border-b-2 border-[#632EE3] p-2 gradient-text"
                      : "gradient-item p-2"
                  }
                >
                  Installation
                </NavLink>
              </div>
            </div>

            <Link
              to="/"
              className="flex gap-2 text-xl gradient-text items-center font-bold"
            >
              <img src={logo} alt="logo" className="w-[40px] h-[40px]" />
              HERO.IO
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <div className="menu menu-horizontal px-1 gap-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "gradient-item border-b-2 border-[#632EE3] pb-1 gradient-text"
                    : "gradient-item pb-1"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive
                    ? "gradient-item border-b-2 border-[#632EE3] pb-1 gradient-text"
                    : "gradient-item pb-1"
                }
              >
                Apps
              </NavLink>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive
                    ? "gradient-item border-b-2 border-[#632EE3] pb-1 gradient-text"
                    : "gradient-item pb-1"
                }
              >
                Installation
              </NavLink>
            </div>
          </div>

          <div className="navbar-end">
            <a
              className="btn nav-btn items-center gradient-item"
              href="https://github.com/zahidulislammahim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" className="w-5 h-5" />
              Contribute
            </a>
          </div>
        </div>
      </div>
      <div className="pt-15"></div>
    </>
  );
};

export default Navbar;
