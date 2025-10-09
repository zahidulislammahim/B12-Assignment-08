import React, { useState } from "react";
import useAppsData from "../../hooks/useAppsData";
import AppsCard from "../../components/AppsCard/AppsCard";
import appErrorImg from "../../assets/App-Error.png";
import Loader from "../../components/Loader/Loader";

const Apps = () => {
  const [search, setSearch] = useState("");
  const { appsData, loading } = useAppsData();
  
  if (loading) {
    return <Loader></Loader>;
  }

  const term = search.trim().toLocaleLowerCase();

  const filteredApps = appsData.filter((app) =>
    app.title.toLocaleLowerCase().includes(term)
  );

  return (
    <div>
      <div className="px-0 md:px-10 lg:px-10 max-w-7xl mx-auto w-full text-center mt-10 items-center">
        <h1 className="text-2xl lg:text-4xl md:text-4xl font-bold">
          Our All Applications
        </h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex flex-col md:flex-row lg:flex-row justify-between md:gap-5 lg:gap-5 mt-5 items-center">
          <div className="flex gap-1 items-center pb-3 mt-10">
            <h4 className="text-xl font-semibold">All Products</h4>
            <p className="text-gray-500">
              (<span>{filteredApps.length}</span> products)
            </p>
          </div>
          <div className="form-control md:mt-8 lg:mt-8">
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search Apps"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-10 my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredApps.length > 0 ? (
          filteredApps.map((app) => <AppsCard app={app} key={app.id} />)
        ) : (
          <div className="col-span-full">
            <div className="flex flex-col ">
              <section className="flex-1 ">
                <div className="px-0 md:px-10 lg:px-10 max-w-7xl mx-auto w-full text-center mt-10 items-center flex flex-col stify-center">
                  <img src={appErrorImg} alt="" />
                  <h1 className="text-2xl lg:text-4xl md:text-4xl mt-10 mb-2  font-bold">
                    OPPS!! APP NOT FOUND
                  </h1>
                  <p>
                    The App you are requesting is not found on our system.
                    please try another apps
                  </p>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
