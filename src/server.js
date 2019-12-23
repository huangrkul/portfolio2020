const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
const port = process.env.PORT || 3001;

function Weather(day) {
  this.temp = day.apparentTemperature;
  this.bg = day.summary;
}

app.get('/weather', (req, res) => {
  const url = `https://api.darksky.net/forecast/${process.env.WEATHER_KEY}/47.6062,-122.332`;

  axios.get(url)
    .then(result => {
      const currentWeather = new Weather(result.data.currently)
      res.send(currentWeather);
    })
});

app.listen(port, () => console.log(`Listening on port ${port}`));