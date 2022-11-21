const {dataPostLogin} = require('../../models/data_user')
const validateToken = require('../../controllers/token/validateToken')
const Response = require('../../utilities/response');

const postLogin = async function (req, res) {
    try {
        let {user, password} = req.body
        let dataResponse = await dataPostLogin([user,password])
        console.log(dataResponse)
        if (dataResponse.length >0) {
            const token = await validateToken(dataResponse[0].user,dataResponse[0].rol)
            data = dataResponse[0]
            data.apiKey = token
            const response = new Response (false,200,`Felicitaciones ${user} te has logueado correctamente.`, data)
            res.status(200).send(response);
        } else {
            throw new Error
        }
    } catch (error) {
        const response = new Response (true,500,'Datos ingresados incorrectos.')
        res.status(500).send(response);
    }
}

module.exports = { postLogin }