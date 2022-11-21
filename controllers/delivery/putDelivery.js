const Response = require('../../utilities/response')
const {dataPutDelivery, dataGetDeliveryById} = require('../../models/data_delivery.js')

const putDelivery = async function (req,res){
    
    let {id_delivery, id_delivery_status}= req.body
    console.log(id_delivery_status)
    console.log(id_delivery)
    try{
        let dataResponse = await dataGetDeliveryById([id_delivery])
        console.log(dataResponse[0].id_delivery_status);
        if (dataResponse[0].id_delivery_status != id_delivery_status){
            await dataPutDelivery([id_delivery_status, id_delivery])
            const response = new Response (false,200,`Se ha editado el estado del pedido de id ${id_delivery}`)
            res.status(200).send(response);
        } else {
            const response = new Response (false,400,`No se detectó ningún cambio en el estado del pedido`)
            res.status(400).send(response);
        }
        
    }
    catch (error) {
        const response = new Response (true,500,'No se ha logrado actualizar el estado del pedido')
        res.status(500).send(response);
    }
}

module.exports = {putDelivery}