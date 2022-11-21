const Response = require('../../utilities/response');
const jwt_decode = require('jwt-decode');


function validateRol (req, res, next) {
    try {
        let token = req.headers.authorization
        token = token.split(' ')[1]
        let decoded = jwt_decode(token);
        console.log(decoded)
        console.log(decoded.admin)
        if (decoded.admin == 0) {
            next()
        } else {
            throw new Error
        }
    } catch {
        let message = new Response (true, 405, 'El usuario no tiene permisos para realizar esta acción.')
        res.status(405).send(message)
    }
}

module.exports = {validateRol}