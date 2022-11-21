const Response = require('../../utilities/response')
const {dataGetUser} = require('../../models/data_user.js')

const getUser = async function (req,res){
    try{
        let dataResponse = await dataGetUser()
        console.log(dataResponse);
        const response = new Response (false,200,'Los usuarios encontrados son:', dataResponse)
        res.status(200).send(response);
    }
    catch (error) {
        const response = new Response (true,500,'Error al buscar usuario')
        res.status(500).send(response);
    }
}

module.exports = {getUser}