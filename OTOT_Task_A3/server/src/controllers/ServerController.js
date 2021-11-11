export async function getMethod(req, res) {
    console.log("Server Service: (GET) /get");

    return res.status(200).send("You have called the GET method!");
}

export async function postMethod(req, res) {
    console.log("Server Service: (POST) /post");

    return res.status(200).send("You have called the POST method!");
}

export async function deleteMethod(req, res) {
    console.log("Server Service: (DELETE) /delete");

    return res.status(200).send("You have called the DELETE method!");
}

export async function putMethod(req, res) {
    console.log("Server Service: (PUT) /put");

    return res.status(200).send("You have called the PUT method!");
}
