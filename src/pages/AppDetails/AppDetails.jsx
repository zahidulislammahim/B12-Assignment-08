import { useParams } from "react-router";
import useAppsData from "../../hooks/useAppsData";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import AppsError from "../AppsError/AppsError";
import Loader from "../../components/Loader/Loader";
import Swal from "sweetalert2";

const AppDetails = () => {
  const { id } = useParams();
  const { appsData, loading } = useAppsData();
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (!loading && appsData) {
      const appData = appsData.find((app) => String(app.id) === id);
      if (appData) {
        const installedApps = JSON.parse(localStorage.getItem("install")) || [];
        const alreadyInstalled = installedApps.some((a) => a.id === appData.id);
        setIsInstalled(alreadyInstalled);
      }
    }
  }, [loading, appsData, id]);

  if (loading) {
    return <Loader></Loader>;
  }

  const appData = appsData.find((app) => String(app.id) === id);
  if (!appData) {
    return <AppsError></AppsError>;
  }

  const {
    image,
    downloads,
    companyName,
    description,
    ratingAvg,
    size,
    title,
    reviews,
    ratings,
  } = appData || {};

  const handleInstall = () => {
    // localStorage-এ সেভ করবো
    const installedApps = JSON.parse(localStorage.getItem("install")) || [];
    const updatedInstalledApps = [...installedApps, appData];
    localStorage.setItem("install", JSON.stringify(updatedInstalledApps));
    
    // state আপডেট করবো
    setIsInstalled(true);
    
    Swal.fire({
      title: "Installed!",
      text: `${title} has been successfully installed.`,
      icon: "success",
    });
  };

  return (
    <div>
      <div className="px-0 md:px-10 lg:px-10 max-w-7xl mx-auto w-full text-center mt-10 items-center ">
        <div className="flex flex-col md:flex-row lg:flex-row gap-10 mb-10 ">
          <div className="flex flex-col md:flex-row lg:flex-row gap-10 w-full items-center border-gray-300 border-b-1 pb-10">
            <img
              src={image}
              alt=""
              className="bg-white p-10 w-xs rounded-lg mx-auto"
            />
            <div className="text-left w-sm md:w-full lg:w-full">
              <div className="border-gray-300 border-b-1 pb-5">
                <h2 className="text-4xl font-bold mt-4">{title}</h2>
                <p className="text-gray-500">
                  Developed By{" "}
                  <a
                    href={`/apps/${companyName}`}
                    className="gradient-text font-semibold border"
                  >
                    {companyName}
                  </a>
                </p>
              </div>
              <div className="flex gap-10 text-center my-5">
                <div className="flex flex-col items-center">
                  <img src={downloadIcon} alt="" />
                  <p>Downloads</p>
                  <p className="text-3xl font-bold">{downloads}M</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={ratingIcon} alt="" />
                  <p>Average Ratings</p>
                  <p className="text-3xl font-bold">{ratingAvg}</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={reviewIcon} alt="" />
                  <p>Total Reviews</p>
                  <p className="text-3xl font-bold">{reviews}</p>
                </div>
              </div>
              <button
                disabled={isInstalled}
                onClick={handleInstall}
                className={`py-7 px-7 rounded-lg text-white font-semibold btn ${
                  isInstalled ? "bg-gray-500" : "bg-[#00bc7d]"
                }`}
              >
                {isInstalled ? "Already Installed" : `Install Now (${size} MB)`}
              </button>
            </div>
          </div>
        </div>
        <div className="border-gray-300 border-b-1 pb-10 mx-5">
          <h3 className="text-left font-bold text-2xl">Rating</h3>
          <div className="w-full h-[300px] md:h-[300px]   p-5 ">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[...ratings].reverse()}
                layout="vertical"
                margin={{ top: 10, right: 0, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip />
                <Bar dataKey="count" fill="#FF8811" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="mt-10 mx-5">
          <h3 className="text-left font-bold text-2xl mb-4">Description</h3>
          <p className="text-left mb-10 text-[#627382]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;