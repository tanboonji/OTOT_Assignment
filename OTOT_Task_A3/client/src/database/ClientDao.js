import pool from './db.js';

export async function getAirports() {
    try {
        const result = await pool.query("SELECT * FROM Airports;");
        return result;
    } catch (err) {
        throw err;
    }
}

export async function getBorders() {
    try {
        const result = await pool.query("SELECT * FROM Borders;");
        return result;
    } catch (err) {
        throw err;
    }
}

export async function getCities() {
    try {
        const result = await pool.query("SELECT * FROM Cities;");
        return result;
    } catch (err) {
        throw err;
    }
}

export async function getConnections() {
    try {
        const result = await pool.query("SELECT * FROM Connections;");
        return result;
    } catch (err) {
        throw err;
    }
}

export async function getCountries() {
    try {
        const result = await pool.query("SELECT * FROM Countries;");
        return result;
    } catch (err) {
        throw err;
    }
}

export async function getRoutes() {
    try {
        const result = await pool.query("SELECT * FROM Routes;");
        return result;
    } catch (err) {
        throw err;
    }
}

export async function getUsers() {
    try {
        const result = await pool.query("SELECT * FROM Users;");
        return result;
    } catch (err) {
        throw err;
    }
}

export async function getVisited() {
    try {
        const result = await pool.query("SELECT * FROM Visited;");
        return result;
    } catch (err) {
        throw err;
    }
}
