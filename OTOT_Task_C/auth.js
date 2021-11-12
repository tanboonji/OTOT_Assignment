const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const jwt = require('jsonwebtoken');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5005;

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const users = new Map();

app.post('/createUser', async(req, res) => {
    try {
        if (!req.body) {
            res.status(500).send("Bad Request. No data found.");
        }
        if (!req.body.role) {
            res.status(500).send("Bad Request. No role found.");
        }
        if (!req.body.email) {
            res.status(500).send("Bad Request. No email found.");
        }
        if (!req.body.password) {
            res.status(500).send("Bad Request. No password found.");
        }

        let role = 'user';
        if (req.body.role === 'admin') {
            role = 'admin';
        }
        const user = { email: req.body.email, password: req.body.password, role: role };
        users.set(req.body.email, user);
        res.status(200).send("Successfully created user.");
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong.");
    }
});

app.post('/login', async(req, res) => {
    try {
        if (!req.body) {
            res.status(500).send("Bad Request. No data found.");
        }
        if (!req.body.email) {
            res.status(500).send("Bad Request. No email found.");
        }
        if (!req.body.password) {
            res.status(500).send("Bad Request. No password found.");
        }

        if (!users.has(req.body.email)) {
            res.status(400).send("User not found.");
        }
        
        let user = users.get(req.body.email);

        if (user.password === req.body.password) {
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_CLIENT_SECRET, { expiresIn: '60m' });
            res.status(200).send(accessToken);
        } else {
            res.status(401).send("Incorrect password.");
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong.");
    }
});

app.listen(port, () => {
    console.log(`Started server on port: ${port}.`);
});
  
module.exports = app;
