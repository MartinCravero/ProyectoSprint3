const Response = require('../../utilities/response');
const {dataGetUserById} = require('../../models/data_user');
// const jwt_decode = require('jwt-decode');

// Comprobar que se encuentren TODOS los campos completados para registrarse
function validateData (req, res, next) {
    if (!req.body.user || !req.body.fullname || !req.body.email || !req.body.phone || !req.body.address || !req.body.password)  {
        let rta = new Response (true, 403, 'Faltan ingresar datos obligatorios')
        res.status(403).send(rta)
    } else {
        next()
    }
}

// Comprobar si el ID ya existe
async function validateId (req, res, next) {
    try {
        let {user} = req.body
        console.log(user)
        let dbRes = await dataGetUserById([user])
        console.log(dbRes.length)
        if (dbRes.length > 0) {
            next()
        } else {
            throw new Error
        }
    }
    catch(e){
        let message = new Response (true, 402, 'No existe el id de usuario que desea actualizar.')
        res.status(402).send(message)
    }
}

// Comprobar si el usuario esta cambiando sus PROPIOS datos y no de otro usuario
async function validateUser (req, res, next) {
    try {
        let token = req.headers.authorization
        // console.log (token)
        token = token.split(' ')[1]
        let decoded = jwt_decode(token);
        let user = req.body.user
        console.log(decoded.admin)
        if (decoded.user == user || decoded.admin == 0) {
            next()
        } else {
            throw new Error
        }
    } catch {
        let message = new Response (true, 405, 'No posee permisos para realizar la acción solicitada')
        res.status(405).send(message)
    }
}

module.exports= { validateData, validateId, validateUser } 