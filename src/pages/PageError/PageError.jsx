import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import errorImg from "../../assets/error-404.png"
import { Link, Navigate } from "react-router";

const PageError = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <section className="flex-1 bg-[#f5f5f5]">
        <div className="px-0 md:px-10 lg:px-10 max-w-7xl mx-auto w-full text-center mt-10 items-center flex flex-col stify-center">
          <img src={errorImg} alt="" />
          <h1 className="text-2xl lg:text-4xl md:text-4xl mt-10 mb-2  font-bold">
            Oops, page not found!
          </h1>
          <p>The page you are looking for is not available.</p>
          <Link to='/' className="py-2 px-6 mt-4 mb-8 gradient-item btn nav-btn">
            Go Back!
          </Link>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default PageError;
