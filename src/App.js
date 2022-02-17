import Search from "./components/Search/Search";
import "./App.css";
import { Backdrop, CircularProgress, LinearProgress } from "@mui/material";
import { useSelector } from "react-redux";

const App = () => {
  const isLoading = useSelector((state) => state.weather.loading);
  return (
    <>
      {isLoading && <LinearProgress color="secondary" />}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="app">
        <Search />
      </div>
    </>
  );
};

export default App;
