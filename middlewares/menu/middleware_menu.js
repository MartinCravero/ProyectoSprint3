const Response = require('../../utilities/response')
const {dataGetMenus} = require('../../models/data_menus')


function validateData (req, res, next) {
    if (!req.body.menu_name || !req.body.description || !req.body.price || !req.body.availability)  {
        console.log(req.body)
        let rta = new Response (true, 411, 'Faltan ingresar datos obligatorios')
        res.status(411).send(rta)
    } else {
        if (req.body.availability == "Yes" || req.body.availability == "No") {
            next()
        } else {
            let rta = new Response (true, 444, 'Availability debe ser Yes o No')
            res.status(444).send(rta)
        }
    }
}

async function validateId (req, res, next) {
    if (!req.body.id_menu)  {
        let rta = new Response (true, 411, `No se ha Ingresado el ID a Eliminar`)
        res.status(411).send(rta)
    } else {
        let allMenus = await dataGetMenus()
        if (allMenus.map(x => x.id_menu).includes(req.body.id_menu))  {
            next()
        } else {
            let rta = new Response (true, 404, `No existe un menu con el ID`)
            res.status(404).send(rta)
        }
    }
}



module.exports= { validateData, validateId } 