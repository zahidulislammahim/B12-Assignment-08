import axios from "axios";
import { useEffect, useState } from "react";

const useAppsData = () => {
  const [appsData, setAppsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const fatchData = async () => {
      await new Promise(res => setTimeout(res, 2000));
      axios("/appData.json")
        .then((data) => setAppsData(data.data))
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    };
    fatchData();
  }, []);

  return { appsData, loading, error };
};

export default useAppsData;
