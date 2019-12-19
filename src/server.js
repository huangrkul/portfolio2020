const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
const port = process.env.PORT || 3001;

app.get('/weather', (req, res) => {
  const url = `https://api.darksky.net/forecast/${process.env.WEATHER_KEY}/47.6062,-122.332`;

  axios.get(url)
    .then(results => {
      console.log(results);
    })
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));