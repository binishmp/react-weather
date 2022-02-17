import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import './WeatherForecast.css';

export default function WeatherForecast({ forecast }) {


  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            Weather Forecast
          </Typography>
          <Typography variant="body2" component="div" className="weatherForecast__body">
              { forecast.forecastday && forecast.forecastday.map( singleDay => {
                    return (
                    <div className="weatherForecast__body--condition" key={singleDay.date}>
                        <h3>{singleDay.date}</h3>
                        <div className="weatherForecast__body--condition-temp">
                        <p className="weatherForecast__body--temp">{singleDay.day.maxtemp_c} &#x2103;</p> 
                           <img className="weatherForecast__body--condition--icon" src={singleDay.day.condition.icon} alt={singleDay.day.condition.text} />
                           <p className="weatherForecast__body--condition--text">{singleDay.day.condition.text}</p>
                        </div>
                    </div>
                    )
              } )}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
