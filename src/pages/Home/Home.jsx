import playStore from "../../assets/playStore.png";
import appStore from "../../assets/appStore.png";
import heroimg from "../../assets/hero.png";
import useAppsData from "../../hooks/useAppsData";
import AppsCard from "../../components/AppsCard/AppsCard";
import { NavLink } from "react-router";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const { appsData, loading } = useAppsData();

   if (loading) {
    return <Loader></Loader>;
  }

  const trandingApps = appsData.slice(0, 8);

  return (
    <div>
      <div>
        <div className="px-0 md:px-8 lg:px-20 max-w-7xl mx-auto w-full text-center mt-10 items-center ">
          <h1 className="text-4xl lg:text-7xl md:text-7xl  font-bold">
            We Build <br />
            <span className="gradient-text">Productive</span> Apps
          </h1>
          <p className="mt-5 text-[#627382] mx-4">
            At <b>HERO.IO,</b> we craft innovative apps designed to make
            everyday life simpler, smarter, and more exciting. Our goal
            is to turn your ideas into digital experiences that truly make an
            impact.
          </p>
          <div className="mt-10 flex justify-center gap-5">
              <a
              className="flex gap-2 items-center btn btn-gost py-7 px-7 rounded-lg "
                href="https://play.google.com"
                target="blank"
              >
                <img src={playStore} alt="" />
                google Play
              </a>
            <a
              className="flex gap-2 items-center btn btn-gost py-7 px-7 rounded-lg "
                href="https://www.apple.com/app-store/"
                target="blank"
              >
                <img src={appStore} alt="" />
                App Store
              </a>
          </div>
          <div className="mt-10 flex  mx-auto justify-center px-15">
            <img src={heroimg} alt="" />
          </div>
        </div>
        <div className="text-center p-5 md:p-20 lg:p-20 nav-btn ">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold">
            Trusted By Millions, Built For You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 text-center mt-10  max-w-7xl mx-auto">
            <div className="space-y-4">
              <p>Total Downloades</p>
              <h3 className="text-4xl md:text-6xl lg:text-6xl font-bold">
                29.6M
              </h3>
              <p>21% More Than Last Month</p>
            </div>
            <div className="space-y-4">
              <p>Total Reviewa</p>
              <h3 className="text-4xl md:text-6xl lg:text-6xl font-bold">
                906K
              </h3>
              <p>46% More Than Last Month</p>
            </div>
            <div className="space-y-4">
              <p>Active Apps</p>
              <h3 className="text-4xl md:text-6xl lg:text-6xl font-bold">
                132+
              </h3>
              <p>21 More Will Launch</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold text-center mt-15">
          Tranding Apps
        </h2>
        <p className="text-center text-[#627382] mt-3">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-10 my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {trandingApps.map((app) => (
            <AppsCard app={app} key={app.id}></AppsCard>
          ))}
        </div>
        <div className="text-center mb-10">
          <NavLink to="apps" className="py-2 px-2  gradient-item btn nav-btn">
            <button>Show All Apps</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
