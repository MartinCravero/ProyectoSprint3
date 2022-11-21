const express = require('express');
const router = express.Router()
const middleware = require('../middlewares/menu/middleware_menu');
const middlewareRol = require('../middlewares/rol/validateRol')

// const {validatePrivilege} = require('../middlewares/validatePrivilege')

const {getMenus} = require('../controllers/menus/getMenus')
const {postMenus} = require('../controllers/menus/postMenus')
const {putMenus} = require('../controllers/menus/putMenus')
const {deleteMenus} = require('../controllers/menus/deleteMenus')

router.get('/listMenus', getMenus)
router.post('/newMenu', middleware.validateData, middlewareRol.validateRol, postMenus) 
router.put('/updateMenu', middleware.validateData, middlewareRol.validateRol, putMenus)
router.delete('/removeMenu', middleware.validateId, middlewareRol.validateRol, deleteMenus)

module.exports = router;

