const asyncHandler = require("express-async-handler");
const axios = require("axios");
const redis = require("redis");

const redisPort = 6379;
const client = redis.createClient(redisPort);

const getData = asyncHandler(async (req, res) => {
    client.get('photos', (err, photos) => {
        if (err) {
        res.status(500).send("Something went wrong.");
        }

        console.log(err);
        if (photos != null) {
        // data inside cache
        return res.status(200).json(JSON.parse(photos));
        }

        // data not inside cache
        try {
        const result = await axios.get('https://jsonplaceholder.typicode.com/photos');
        client.setex('photos', 3600, JSON.stringify(result));
        res.status(200).json(result.rows);
        } catch (err) {
        res.status(500).send("Something went wrong.");
        }
    });
});

module.exports = {
    getData,
};