import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import './WeatherCurrentInfo.css';

export default function WeatherCurrentInfo({ current }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            Current Weather
          </Typography>
          <Typography variant="body2" component="div" className="weatherCurrentInfo__body">
           <p className="weatherCurrentInfo__body--temp">{current.temp_c} &#x2103;</p> 
           <img className="weatherCurrentInfo__body--condition--icon" src={current.condition.icon} alt={current.condition.text} />
           <p className="weatherCurrentInfo__body--condition--text">{current.condition.text}</p>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
