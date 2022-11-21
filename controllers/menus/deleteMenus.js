const Response = require('../../utilities/response')
const {dataGetMenuById, dataDeleteMenu} = require('../../models/data_menus.js')


const deleteMenus = async function (req,res){
    
    let {id_menu}= req.body
    try{
        let dataResponse = await dataGetMenuById([id_menu])
            await dataDeleteMenu([dataResponse[0].id_menu])
            const response = new Response (false,200,`Se ha eliminado el menu de id ${id_menu} de la lista`)
            res.status(200).send(response);
    }
    catch (error) {
        const response = new Response (true,500,'No se ha logrado eliminar el menú')
        res.status(500).send(response);
    }
}

module.exports = {deleteMenus}