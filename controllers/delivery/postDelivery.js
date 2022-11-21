const Response = require('../../utilities/response')
const {dataPostDelivery, dataPostPedido} = require('../../models/data_delivery.js')

const postDelivery = async function (req,res){
    let {id_user, address_to_deliver, id_payment_method, pedido}= req.body
    try{
        let dataResponse = await dataPostDelivery([id_user, address_to_deliver, id_payment_method])
        console.log(dataResponse[0]);
        let id_menu = [];
        let quantity = [];
        pedido.map(x=>console.log(x.id_menu))
        for (let i = 0; i < pedido.length; i++) {
            id_menu.push(pedido[i].id_menu);
            quantity.push(pedido[i].quantity);
            let addPedido = await dataPostPedido([dataResponse[0], id_menu[i], quantity[i]])
            setTimeout(() => {}, 500);
            console.log(addPedido);
        }
        let orden = req.body
        orden.id_delivery = dataResponse[0]
        const response = new Response (false,200,`Se ha agregado el pedido ${dataResponse[0]}` )
        res.status(200).send(response);
    }
    catch (error) {
        const response = new Response (true,500,'No se ha logrado agregar un nuevo pedido')
        res.status(500).send(response);
    }
}

module.exports = {postDelivery}