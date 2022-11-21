const Response = require('../../utilities/response')
const {dataGetUserById, dataPutUser} = require('../../models/data_user.js')


const putUser = async function (req,res){
    
    let {id_user, user, fullname, email, phone, address, password}= req.body
    try{
        let dataResponse = await dataGetUserById([id_user])
        console.log(dataResponse[0].user);
        if (dataResponse[0].user != user || dataResponse[0].fullname != fullname || dataResponse[0].email != email ||
            dataResponse[0].phone != phone || dataResponse[0].address != address || dataResponse[0].password != password
            ){
            console.log('entre')
            await dataPutUser([user, fullname, email, phone, address, password, id_user])
            const response = new Response (false,200,`Se ha editado el usuario de id ${id_user} de la lista`)
            res.status(200).send(response);
        } else {
            const response = new Response (false,400,`No se detectó ningún cambio en los datos`)
            res.status(400).send(response);
        }
        
    }
    catch (error) {
        const response = new Response (true,500,'No se ha logrado actualizar el usuario')
        res.status(500).send(response);
    }
}

module.exports = {putUser}