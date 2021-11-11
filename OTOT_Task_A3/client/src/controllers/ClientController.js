import * as clientDao from "../database/ClientDao.js";

export async function getAirports(req, res) {
    console.log("Client Service: (GET) /airports");

    await clientDao.getAirports()
        .then(result => { res.status(200).json(result.rows); })
        .catch(err => { res.status(500).send(err.message); });
}

export async function getBorders(req, res) {
    console.log("Client Service: (GET) /borders");

    await clientDao.getBorders()
        .then(result => { res.status(200).json(result.rows); })
        .catch(err => { res.status(500).send(err.message); });
}

export async function getCities(req, res) {
    console.log("Client Service: (GET) /cities");

    await clientDao.getCities()
        .then(result => { res.status(200).json(result.rows); })
        .catch(err => { res.status(500).send(err.message); });
}

export async function getConnections(req, res) {
    console.log("Client Service: (GET) /connections");

    await clientDao.getConnections()
        .then(result => { res.status(200).json(result.rows); })
        .catch(err => { res.status(500).send(err.message); });
}

export async function getCountries(req, res) {
    console.log("Client Service: (GET) /countries");

    await clientDao.getCountries()
        .then(result => { res.status(200).json(result.rows); })
        .catch(err => { res.status(500).send(err.message); });
}

export async function getRoutes(req, res) {
    console.log("Client Service: (GET) /routes");

    await clientDao.getRoutes()
        .then(result => { res.status(200).json(result.rows); })
        .catch(err => { res.status(500).send(err.message); });
}

export async function getUsers(req, res) {
    console.log("Client Service: (GET) /users");

    await clientDao.getUsers()
        .then(result => { res.status(200).json(result.rows); })
        .catch(err => { res.status(500).send(err.message); });
}

export async function getVisited(req, res) {
    console.log("Client Service: (GET) /visited");

    await clientDao.getVisited()
        .then(result => { res.status(200).json(result.rows); })
        .catch(err => { res.status(500).send(err.message); });
}