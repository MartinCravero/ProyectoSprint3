const Response = require('../../utilities/response')
const { selectIdUserFromDelivery } = require('../../models/data_delivery')

function validateData (req, res, next) {
    if (!req.body.user || !req.body.address_to_deliver || !req.body.menus[0].id_menu || !req.body.menus[0].quantity || !req.body.id_payment)  {
        let rta = new Response (true, 403, 'Faltan ingresar datos obligatorios')
        res.status(403).send(rta)
    } else {
        next()
    }
}

async function validateAccess (req,res,next) {
    try {
        let {id_user, id_delivery} = req.body;
        let dbRes =  await selectIdUserFromDelivery([id_delivery])
        console.log(dbRes)
        if ( id_user == dbRes[0].id_user ) {
            next()
        } else {
            throw new Error
        }
    } catch {
        let message = new Response (true, 405, 'No tiene acceso a la opción solicitada')
        res.status(405).send(message)
    }
}

module.exports = { validateAccess,  validateData}