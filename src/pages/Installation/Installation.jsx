import React, { useEffect, useState } from "react";
import useAppsData from "../../hooks/useAppsData";
import Loader from "../../components/Loader/Loader";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import Swal from "sweetalert2";

const Installation = () => {
  const { loading } = useAppsData();
  const [installApp, setInstallApp] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const alradyInstallApp = JSON.parse(localStorage.getItem("install"));
    if (alradyInstallApp) setInstallApp(alradyInstallApp);
  }, [setInstallApp]);

  if (loading) {
    return <Loader></Loader>;
  }

  const sortApps = (() => {
    if (sortOrder === "downlode-asc") {
      return [...installApp].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "downlode-desc") {
      return [...installApp].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installApp;
    }
  })();

  const handelUninstall = (id, app) => {
    Swal.fire({
      icon: "question",
      title: `Do you <br/> Uninstall ${app.title}?`,
      showCancelButton: true,
      confirmButtonText: "Yes, Uninstall it!!",
    }).then((result) => {
      if (result.isConfirmed) {
        const alradyInstallApp = JSON.parse(localStorage.getItem("install"));
        let remeningApps = alradyInstallApp.filter((a) => a.id !== id);
        setInstallApp(remeningApps);
        localStorage.setItem("install", JSON.stringify(remeningApps));
        Swal.fire("Uninstalled!", `${app.title} has been successfully Uninstalled!.`, "success");
      }
    });
    
  };

  return (
    <div>
      <div className="px-0 md:px-10 lg:px-10 max-w-7xl mx-auto w-full text-center mt-10 items-center ">
        <h1 className="text-2xl lg:text-4xl md:text-4xl  font-bold">
          Your Installed Apps
        </h1>
        <p className="mx-10 md:mx-0 lg:mx-10">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="flex flex-col md:flex md:flex-row lg:flex-row lg:flex justify-between md:gap-5 lg:gap-5  md:mt-5 lg:mt-5 items-center mx-5">
          <div className="flex gap-1  items-center  pb-3 mt-10">
            <h4 className="text-xl font-semibold">
              <span>{sortApps.length}</span> Apps Found
            </h4>
          </div>
          <div className="form-control  md:mt-8 lg:mt-8">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="select "
            >
              <option value="none">Sort By Size</option>
              <option value="downlode-asc">Low To High</option>
              <option value="downlode-desc">High To Low</option>
            </select>
          </div>
        </div>
        <div className="space-y-5 mt-5 mb-10 mx-5 ">
          {sortApps.length > 0 ? (
            sortApps.map((app) => (
              <div
                className="flex justify-between items-center bg-white p-4 rounded-lg hover:shadow w-full md:w-full lg:w-full "
                key={app.id}
              >
                <div className=" flex  gap-3 md:gap-10 lg:gap-10  items-center  ">
                  <img
                    src={app.image}
                    alt=""
                    className="w-10 md:w-20 lg:w-20 rounded-lg mx-auto"
                  />
                  <div className="text-left ">
                    <h2 className="text-xl  md:text-2xl lg:text-2xl font-bold mt-4 mb-2">
                      {app.title}
                    </h2>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 ">
                        <img src={downloadIcon} alt="" className="w-[16px]" />
                        <p className="text-[#00d390]">{app.downloads}M</p>
                      </div>
                      <div className="flex items-center gap-1    ">
                        <img src={ratingIcon} alt="" className="w-[16px]" />
                        <p className="text-[#ff8811]">{app.ratingAvg}</p>
                      </div>
                      <p className="text-[#627382] ">{app.size}MB</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handelUninstall(app.id, app)}
                  className="bg-[#00bc7d] p-2 md:p-7 lg:p-7  rounded-lg text-white font-semibold btn "
                >
                  Uninstall
                </button>
              </div>
            ))
          ) : (
            <div>
              <h1 className="text-4xl font-bold text-gray-300 mt-25 mb-25">
                No Apps Installed
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Installation;
