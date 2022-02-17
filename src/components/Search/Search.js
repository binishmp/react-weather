import React, { useState } from "react";
import "./Search.css";
import WeatherInfo, { MemoizedWeatherInfo } from "../WeatherInfo/WeatherInfo";
import Logo from "../../images/logo.png";
import { useDispatch } from "react-redux";
import { fetchAsynchWeather } from "../../features/weather/weatherSlice";

const Search = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(fetchAsynchWeather(term));
  };

  return (
    <div className="search">
      <img src={Logo} alt="Logo" className="search__logo" />
      <form onSubmit={submitHandler}>
        <input type="text" onChange={(e) => setTerm(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <div className="search__result">
        <MemoizedWeatherInfo />
      </div>
    </div>
  );
};

export default Search;
