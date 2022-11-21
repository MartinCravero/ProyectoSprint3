const menus = require('../modules/menus');
const user = require('../modules/user');
const delivery = require('../modules/delivery');


module.exports = function (app) {
    app.use("/menus", menus)
    app.use("/user", user)
    app.use("/delivery", delivery)
}
