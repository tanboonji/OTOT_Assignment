const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const axios = require("axios");
const redis = require("redis");

const redisPort = 6379;
const client = redis.createClient(redisPort);

const app = express();
const port = process.env.PORT || 5004;

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const getData = async (req, res) => {
  client.get('photos', (err, photos) => {
    if (err) {
      res.status(500).send("Something went wrong.");
    } else {
      if (photos != null) {
        // data inside cache
        return res.status(200).json(JSON.parse(photos));
      } else {
        // data not inside cache
        axios.get('https://jsonplaceholder.typicode.com/photos')
          .then(result => {
            client.setex('photos', 3600, JSON.stringify(result.data));
            res.status(200).json(result.data);
          })
          .catch(error => {
            res.status(500).send("Something went wrong.");
          });
      }
    }
  });  
};

app.get("/", getData);

app.listen(port, () => {
  console.log(`Started server on port: ${port}.`);
});

module.exports = app;
