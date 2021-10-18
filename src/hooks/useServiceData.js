import { useEffect, useState } from "react";

const useServiceData = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/mehedisarkar2k/medical-data/master/departments.json"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return [services];
};

export default useServiceData;
