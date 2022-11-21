const Response = require('../../utilities/response')
const {dataGetMenus} = require('../../models/data_menus.js')

const getMenus = async function (req,res){
    try{
        let dataResponse = await dataGetMenus()
        console.log(dataResponse);
        const response = new Response (false,200,'Los menus disponibles son:', dataResponse)
        res.status(200).send(response);
    }
    catch (error) {
        const response = new Response (true,500,'Error al buscar menus')
        res.status(500).send(response);
    }
}

module.exports = {getMenus}