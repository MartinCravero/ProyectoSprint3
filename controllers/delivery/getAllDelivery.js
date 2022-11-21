const Response = require('../../utilities/response')
const {dataGetDeliveryAdmin} = require('../../models/data_delivery.js')

const getAllDelivery = async function (req,res){
    try{
        let dataResponse = await dataGetDeliveryAdmin()
        console.log(dataResponse);
        const response = new Response (false,200,'Los pedidos realizados son:', dataResponse)
        res.status(200).send(response);
    }
    catch (error) {
        const response = new Response (true,500,'Error al buscar los pedidos')
        res.status(500).send(response);
    }
}

module.exports = {getAllDelivery}