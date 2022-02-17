import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../../api/axiosConfig";
import { API_KEY } from "../../api/apiKey";

const initialState = {
  weatherInfo: null,
  loading: false,
};

export const fetchAsynchWeather = createAsyncThunk(
  "weather/fetchAsynchWeather",
  async (term) => {
    
    if (term.trim() === "") return null;

    const response = await axiosConfig.get("forecast.json", {
      params: {
        key: API_KEY,
        q: term,
        days: 5,
        aqi: "yes",
        alerts: "yes",
      },
    });
    return response.data;
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addWeather: (state, action) => {
      state.weatherInfo = action.payload;
    },
  },
  extraReducers: {
    [fetchAsynchWeather.pending]: (state) => {
      console.log("Pending");
      return { ...state, loading: true };
    },
    [fetchAsynchWeather.fulfilled]: (state, action) => {
      console.log("Fetched successfully");
      return { ...state, ... {weatherInfo: action.payload, loading: false } };
    },
    [fetchAsynchWeather.rejected]: (state) => {
      console.log("Rejected");
      return { ...state, ...{weatherInfo: null, loading : false } };
    },
  },
});

export const { addWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
