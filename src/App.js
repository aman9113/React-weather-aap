import React, { useEffect, useState } from "react";
import { ReactDom } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
//components
import Search from "./components/Search";
import Day from "./components/Day";

//custom hooks
import { useFetch } from "./hooks/useFetch";
//weather object template

const App = () => {
  let [city, setCity] = useState("");
  const key = "e2eb493ce4a24c05b76144923221307";
  const url = `http://api.weatherapi.com/v1/forecast.json.json?key=${key}&q=${
    city ? city : "addis ababa"
  }&days=5`;

  let { loading, data, location } = useFetch(url);
  //let key2 = "AIzaSyBmOCResHyJ4hZGWYJtplGtEyK1OuoNn0Y";
  //let uri = `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${key2}`;

  //useEffect(() => {
  //  const getResp = async () => {
  //    const response = await fetch(uri);
  //    const data = await response.json();
  //    console.log(data);
  //  };
  //  getResp();
  //}, [uri]);
  //console.log(data);
  //console.log(location);
  return (
    <>
      <h4 className="header">Weather App</h4>
      <Search setCity={setCity} />
      <p>
        {location.name} / {location.country}
      </p>
      <div className="row" style={{ margin: "0px auto" }}>
        {data.map((day, index) => {
          return <Day {...day} key={index} location={location} />;
        })}
      </div>
    </>
  );
};

export default App;
