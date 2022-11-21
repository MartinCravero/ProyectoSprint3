const Response = require('../../utilities/response')
const {dataGetUserById, dataPutRolUser} = require('../../models/data_user.js')


const putRolUser = async function (req,res){
    
    let {id_user, rol}= req.body
    try{
        let dataResponse = await dataGetUserById([id_user])
        console.log(dataResponse[0].user);
        if (dataResponse[0].rol != rol){
            console.log('entre')
            await dataPutRolUser([rol, id_user])
            const response = new Response (false,200,`Se ha editado el rol del usuario de id ${id_user} de la lista`)
            res.status(200).send(response);
        } else {
            const response = new Response (false,400,`No se detectó modificación en el rol del usuario`)
            res.status(400).send(response);
        }
        
    }
    catch (error) {
        const response = new Response (true,500,'No se ha logrado actualizar el usuario')
        res.status(500).send(response);
    }
}

module.exports = {putRolUser}