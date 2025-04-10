const express = require ('express');
const dotenv = require('dotenv');
const mainroute = require('./routes/mainroute.js');
const db = require("./db/mongodb.js");
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());  
app.use(bodyParser.json());
dotenv.config();
const port = process.env.PORT || 5000;

// static file serving from dist folder from the client
app.use(express.static(path.join(__dirname, './client/dist')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/dist/index.html'));
});


app.use("/api",mainroute ); 

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});