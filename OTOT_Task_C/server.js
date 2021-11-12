const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const jwt = require('jsonwebtoken');

require('dotenv').config();

const accessControl = require('./access');

const app = express();
const port = process.env.PORT || 5006;

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post('/user', verifyToken, (req, res) => {
    res.status(200).send("You are authorized.");
});

app.post('/admin', verifyToken, (req, res) => {
    res.status(200).send("You are authorized (admin).");
});

function verifyToken(req, res, next) {
    const accessPath = req.route.path;
    try {
        const header = req.headers['authorization'];
        accessToken = header.split(' ')[1];

        if (!accessToken) {
            res.status(401).send("Not Authenticated.");
        }

        jwt.verify(accessToken, process.env.ACCESS_TOKEN_CLIENT_SECRET, (err, user) => {
            if (err) {
                res.status(401).send("Not Authenticated.");
            }
            if (checkPermission(accessPath, user.role)) {
                next();
            } else {
                res.status(403).send("Not Authorized.")
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong.");
    }
}

function checkPermission(accessPath, role) {
    return accessControl.control.filter(user => user.role === role)[0].access.includes(accessPath);
}

app.listen(port, () => {
    console.log(`Started server on port: ${port}.`);
});

module.exports = app;
