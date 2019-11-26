const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;
const DIST_DIR = path.join(__dirname, './dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));

app.get('/', handleApp);
app.get('*', handleError);


function handleApp(req, res) {
  res.sendFile(HTML_FILE);
}

//this function handles all incoming errors
function handleError(req, res) {
  console.error();
}

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});