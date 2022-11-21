const Response = require('../../utilities/response')
const {dataPostMenus} = require('../../models/data_menus.js')

const postMenus = async function (req,res){
    let {menu_name, description, price, availability}= req.body
    try{
        let dataResponse = await dataPostMenus([menu_name, description, price, availability])
        console.log(dataResponse);
        const response = new Response (false,200,`Se ha agregado ${menu_name} a la lista de menus`)
        res.status(200).send(response);
    }
    catch (error) {
        const response = new Response (true,500,'No se ha logrado agregar un nuevo menú')
        res.status(500).send(response);
    }
}

module.exports = {postMenus}