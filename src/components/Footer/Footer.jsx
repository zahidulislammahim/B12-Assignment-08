import React from "react";
import github from "../../assets/github.png";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="footer  text-base-content p-10">
      <div className="footer sm:footer-horizontal  text-base-content p-10 max-w-7xl mx-auto border-gray-300 border-b-2 w-full">
        <nav>
          <Link
            to="/"
            className="flex gap-2 text-xl gradient-text items-center font-bold"
          >
            <img src={logo} alt="" className="w-[40px] h-[40px]" />
            HERO.IO
          </Link>
          <p>
            Building productive apps to make life smarter,
            <br /> simpler & more exciting.
          </p>
        </nav>
        <nav>
          <h6 className="font-bold text-xl">Company</h6>
          <div className="menu  px-1 gap-2 ">
            <NavLink to="/" className="gradient-item">
              Home
            </NavLink>
            <NavLink to="/apps" className="gradient-item">
              Apps
            </NavLink>
            <NavLink to="installation" className="gradient-item">
              Installation
            </NavLink>
          </div>
        </nav>
        <nav>
          <h6 className="font-bold text-xl">Follow Us</h6>
          <a
            className="btn nav-btn items-center gradient-item"
            href="https://github.com/zahidulislammahim"
            target="blank"
          >
            <img src={github} alt="" />
            Contribute
          </a>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto">
        {" "}
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
