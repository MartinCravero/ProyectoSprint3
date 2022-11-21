const Response = require('../../utilities/response')
const {dataGetDeliveryById, dataDeleteDeliveryPedido, dataDeleteDelivery} = require('../../models/data_delivery.js')


const deleteDelivery = async function (req,res){
    
    let {id_delivery}= req.body
    try{
        console.log(id_delivery)
        let dataResponse = await dataGetDeliveryById([id_delivery])
            await dataDeleteDeliveryPedido([dataResponse[0].id_delivery])
            await dataDeleteDelivery([dataResponse[0].id_delivery])
            const response = new Response (false,200,`Se ha eliminado el pedido de id ${id_delivery} de la lista`)
            res.status(200).send(response);
    }
    catch (error) {
        const response = new Response (true,500,'No se ha logrado eliminar el pedido')
        res.status(500).send(response);
    }
}

module.exports = {deleteDelivery}