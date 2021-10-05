import { useState, useEffect } from "react";

export const useGeolocation = () => {
  const [geolocation, setGeolocation] = useState(null);
  const [userIP, setUserIP] = useState(null);
  const [city, setCity] = useState(null);
  const [region, setRegion] = useState(null);

  // Only run on mount and unmount
  useEffect(() => {
    const setValues = json => {
      setGeolocation(json);
      setUserIP(json.ip);
      setCity(json.city);
      setRegion(json.region);
    };

    fetch("https://ipapi.co/json")
      .then(data => data.json())
      .then(json => {
        setValues(json);
      })
      .catch(err => console.log(err));
  }, []);

  return {
    geolocation,
    setGeolocation,
    userIP,
    city,
    region
  };
};


