const sequelize = require ('../utilities/db_context');

const dataPostDelivery = (orden) =>
    sequelize.query('INSERT INTO delivery (id_user, address_to_deliver, id_delivery_status, id_payment_method, time_event) values (?, ?, 1, ?, now())', {
        replacements: orden,
        type: sequelize.QueryTypes.INSERT
    })

    const dataPostPedido = (orden) =>
    sequelize.query('INSERT INTO delivery_pedido (id_delivery, id_menu, quantity) values (?, ?, ?)', {
        replacements: orden,
        type: sequelize.QueryTypes.INSERT
    })

    const dataGetDeliveryAdmin = () =>
    sequelize.query('SELECT delivery.id_delivery as "Numero de pedido", delivery.address_to_deliver as "Direccion", delivery_status.description as "Estado", user.fullname, payment_method.description as "Medio de pago", GROUP_CONCAT(delivery_pedido.quantity," x " ,menus.menu_name) as "pedido", SUM(delivery_pedido.quantity*menus.price) as total FROM delivery inner join delivery_status on delivery.id_delivery_status  = delivery_status.id_delivery_status inner join user on delivery.id_user = user.id_user inner join payment_method on delivery.id_payment_method = payment_method.id_payment_method inner join delivery_pedido on delivery.id_delivery = delivery_pedido.id_delivery inner join menus on delivery_pedido.id_menu = menus.id_menu group by delivery.id_delivery', {
        type: sequelize.QueryTypes.SELECT
    })

    const dataGetDelivery = (id) =>
    sequelize.query('SELECT delivery.id_delivery as "Numero de pedido", delivery.address_to_deliver as "Direccion", delivery_status.description as "Estado", user.fullname, payment_method.description as "Medio de pago", GROUP_CONCAT(delivery_pedido.quantity," x " ,menus.menu_name) as "pedido", SUM(delivery_pedido.quantity*menus.price) as total FROM delivery inner join delivery_status on delivery.id_delivery_status  = delivery_status.id_delivery_status inner join user on delivery.id_user = user.id_user inner join payment_method on delivery.id_payment_method = payment_method.id_payment_method inner join delivery_pedido on delivery.id_delivery = delivery_pedido.id_delivery inner join menus on delivery_pedido.id_menu = menus.id_menu where delivery.id_delivery= ? group by delivery.id_delivery', {
        replacements: id,
        type: sequelize.QueryTypes.SELECT
    })

    const dataGetDeliveryById = (id) =>
    sequelize.query(`SELECT * FROM delivery where id_delivery = ?`, {
        replacements: id,
        type: sequelize.QueryTypes.SELECT
    })

    const dataPutDelivery = (delivery) =>
    sequelize.query('UPDATE delivery SET id_delivery_status = ? where id_delivery = ?',{
        replacements: delivery,
        type: sequelize.QueryTypes.UPDATE
    })

    const dataDeleteDeliveryPedido = (id) =>
    sequelize.query('DELETE FROM delivery_pedido where id_delivery = ?', {
        replacements: id,
        type: sequelize.QueryTypes.DELETE
    })

    const dataDeleteDelivery = (id) =>
    sequelize.query('DELETE FROM delivery where id_delivery = ?', {
        replacements: id,
        type: sequelize.QueryTypes.DELETE
    })

    const selectIdUserFromDelivery = (id) =>
    sequelize.query(`SELECT * FROM delivery where id_delivery = ?`, {
        replacements: id,
        type: sequelize.QueryTypes.SELECT
    })

module.exports = {dataPostDelivery, dataPostPedido, dataGetDeliveryAdmin, dataGetDelivery, dataGetDeliveryById, dataPutDelivery, dataDeleteDeliveryPedido, dataDeleteDelivery, selectIdUserFromDelivery}