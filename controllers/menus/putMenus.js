const Response = require('../../utilities/response')
const {dataGetMenuById, dataPutMenu} = require('../../models/data_menus.js')


const putMenus = async function (req,res){
    
    let {id_menu, menu_name, description, price, availability}= req.body
    try{
        let dataResponse = await dataGetMenuById([id_menu])
        console.log(dataResponse[0].menu_name);
        if (dataResponse[0].menu_name != menu_name || dataResponse[0].description != description || dataResponse[0].price != price || dataResponse[0].availability != availability){
            await dataPutMenu([menu_name, description, price, availability, id_menu])
            const response = new Response (false,200,`Se ha editado el menu de id ${id_menu} de la lista`)
            res.status(200).send(response);
        } else {
            const response = new Response (false,400,`No se detectó ningún cambio en los datos`)
            res.status(400).send(response);
        }
        
    }
    catch (error) {
        const response = new Response (true,500,'No se ha logrado actualizar el menú')
        res.status(500).send(response);
    }
}

module.exports = {putMenus}