const Response = require('../../utilities/response')
const {dataGetUserById, dataDeleteUser} = require('../../models/data_user.js')


const deleteUser = async function (req,res){
    
    let {id_user}= req.body
    try{
        let dataResponse = await dataGetUserById([id_user])
            await dataDeleteUser([dataResponse[0].id_user])
            const response = new Response (false,200,`Se ha eliminado el usuario de id ${id_user} de la lista`)
            res.status(200).send(response);
    }
    catch (error) {
        const response = new Response (true,500,'No se ha logrado eliminar el usuario')
        res.status(500).send(response);
    }
}

module.exports = {deleteUser}