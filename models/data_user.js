const sequelize = require ('../utilities/db_context');

const dataGetUser = () =>
    sequelize.query('SELECT * FROM user', {
        type: sequelize.QueryTypes.SELECT
    })

const dataPostUser = (user) =>
    sequelize.query('INSERT INTO user (user, fullname, email, phone, address, password, rol) values (?, ?, ?, ?, ?, ?, 1)', {
        replacements: user,
        type: sequelize.QueryTypes.INSERT
    })

const dataGetUserById = (id) =>
    sequelize.query(`SELECT * FROM user where id_user = ?`, {
        replacements: id,
        type: sequelize.QueryTypes.SELECT
    })

const dataPutUser = (user) =>
    sequelize.query('UPDATE user SET user = ?, fullname = ?, email = ?, phone = ?, address = ?, password = ? where id_user = ?',{
        replacements: user,
        type: sequelize.QueryTypes.UPDATE
    })

const dataPutRolUser = (user) =>
    sequelize.query('UPDATE user SET rol = ? where id_user = ?',{
        replacements: user,
        type: sequelize.QueryTypes.UPDATE
    })

const dataDeleteUser = (id) =>
    sequelize.query('DELETE FROM user where id_user = ?', {
        replacements: id,
        type: sequelize.QueryTypes.DELETE
    })

const dataPostLogin = (user) =>
    sequelize.query('SELECT * from user WHERE user = ? AND password = ?', {
        replacements: user,
        type: sequelize.QueryTypes.SELECT
    })


module.exports = {dataGetUser, dataPostUser, dataGetUserById, dataPutUser, dataPutRolUser, dataDeleteUser, dataPostLogin}