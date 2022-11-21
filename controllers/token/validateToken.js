const jwt = require('jsonwebtoken');
const jwtKey = 'D3l1l4h';

module.exports = function (user, rol) {
    const token = jwt.sign({
        usuario: user,
        admin: rol
        },
        jwtKey, 
        {expiresIn: '1h'},
        {algorithm: 'HS256'},
    )
    return token
}