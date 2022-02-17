import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import './WeatherLocationInfo.css';

export default function WeatherLocationInfo({ location }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            Location
          </Typography>
          <Typography variant="body2" component="div">
            <table className="weatherLocationInfo__table">
              <tbody>
              <tr>
                <td className="txt-bold">Country</td>
                <td>{location.country}</td>
              </tr>
              <tr>
                <td className="txt-bold">Lat/Long</td>
                <td>{`${location.lat},${location.lon}`}</td>
              </tr>
              <tr>
                <td className="txt-bold">Local Time</td>
                <td>{location.localtime}</td>
              </tr>
              <tr>
                <td className="txt-bold">Name</td>
                <td>{location.name}</td>
              </tr>
              <tr>
                <td className="txt-bold">Region</td>
                <td>{location.region}</td>
              </tr>
              <tr>
                <td className="txt-bold">Timezone</td>
                <td>{location.tz_id}</td>
              </tr>
              </tbody>
            </table>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
