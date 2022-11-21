const Response = require('../../utilities/response')
const {dataPostUser} = require('../../models/data_user.js')

const postUser = async function (req,res){
    let {user, fullname, email, phone, address, password}= req.body
    try{
        let dataResponse = await dataPostUser([user, fullname, email, phone, address, password])
        console.log(dataResponse);
        const response = new Response (false,200,`Se ha agregado ${user} a la lista de usuarios`)
        res.status(200).send(response);
    }
    catch (error) {
        const response = new Response (true,500,'No se ha logrado agregar un nuevo usuario')
        res.status(500).send(response);
    }
}

module.exports = {postUser}