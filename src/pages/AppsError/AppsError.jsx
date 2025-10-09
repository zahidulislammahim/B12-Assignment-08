import React from "react";
import appErrorImg from "../../assets/App-Error.png";
import { Link } from "react-router";

const AppsError = () => {
  return (
    <div className="flex flex-col ">
      <section className="flex-1 ">
        <div className="px-0 md:px-10 lg:px-10 max-w-7xl mx-auto w-full text-center mt-10 items-center flex flex-col stify-center">
          <img src={appErrorImg} alt="" />
          <h1 className="text-2xl lg:text-4xl md:text-4xl mt-10 mb-2  font-bold">
            OPPS!! APP NOT FOUND
          </h1>
          <p>The App you are requesting is not found on our system. please try another apps</p>
          <Link to="/apps" className="py-2 px-6 mt-4 mb-8  gradient-item btn nav-btn">
            Go Back!
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AppsError;
