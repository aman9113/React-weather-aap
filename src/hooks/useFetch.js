import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  const [location, setLocation] = useState({
    country: "",
    name: "",
    localtime: "",
  });
  const getData = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setData(data.forecast.forecastday);
    setloading(false);
    setLocation({
      country: data.location.country,
      name: data.location.name,
      localtime: data.location.localtime,
    });
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);
  return { loading, data, location };
};
