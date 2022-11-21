const Response = require('../../utilities/response')
const {dataGetDelivery} = require('../../models/data_delivery.js')

const getDelivery = async function (req,res){
    try{
        let {id_delivery} = req.body
        console.log(id_delivery)
        let dataResponse = await dataGetDelivery([id_delivery])
        console.log(dataResponse);
        const response = new Response (false,200,'Los pedidos realizados por el usuario son:', dataResponse)
        res.status(200).send(response);
    }
    catch (error) {
        const response = new Response (true,500,'Error al buscar los pedidos')
        res.status(500).send(response);
    }
}

module.exports = {getDelivery}