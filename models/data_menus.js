const sequelize = require ('../utilities/db_context');


const dataGetMenus = () =>
    sequelize.query('SELECT * FROM menus', {
        type: sequelize.QueryTypes.SELECT
    })

const dataPostMenus = (menu) =>
    sequelize.query('INSERT INTO menus (menu_name, description, price, availability) values (?, ?, ?, ?)', {
        replacements: menu,
        type: sequelize.QueryTypes.INSERT
    })

const dataGetMenuById = (id) =>
    sequelize.query(`SELECT * FROM menus where id_menu = ?`, {
        replacements: id,
        type: sequelize.QueryTypes.SELECT
    })

const dataPutMenu = (menu) =>
    sequelize.query('UPDATE menus SET menu_name = ?, description = ?, price = ?, availability = ? where id_menu = ?',{
        replacements: menu,
        type: sequelize.QueryTypes.UPDATE
    })

const dataDeleteMenu = (id) =>
    sequelize.query('DELETE FROM menus where id_menu = ?', {
        replacements: id,
        type: sequelize.QueryTypes.DELETE
    })

module.exports = {dataGetMenus, dataPostMenus, dataGetMenuById, dataPutMenu, dataDeleteMenu}
