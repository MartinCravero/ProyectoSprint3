const express = require('express');
const router = express.Router()
const middleware = require('../middlewares/user/middleware_user')
const middlewareRol = require('../middlewares/rol/validateRol')


const {getUser} = require('../controllers/user/getUser')
const {postLogin} = require('../controllers/user/postLogin')
const {postUser} = require('../controllers/user/postUser')
const {putRolUser} = require('../controllers/user/putRolUser')
const {putUser} = require('../controllers/user/putUser')
const {deleteUser} = require('../controllers/user/deleteUser')

router.get('/listUsers', middlewareRol.validateRol, getUser)
router.post('/login', postLogin)
router.post('/newUser', middleware.validateData, postUser)
router.put('/newRol', middlewareRol.validateRol, putRolUser)
router.put('/updateUser', middleware.validateData, middleware.validateUser, putUser)
router.delete('/removeUser', middleware.validateUser, deleteUser)

module.exports = router;