const express = require('express');
const router = express.Router()
const middleware = require('../middlewares/delivery/middleware_delivery')
const middlewareRol = require('../middlewares/rol/validateRol')

const {getAllDelivery} = require('../controllers/delivery/getAllDelivery')
const {getDelivery} = require('../controllers/delivery/getDelivery')
const {postDelivery} = require('../controllers/delivery/postDelivery')
const {putDelivery} = require('../controllers/delivery/putDelivery')
const {deleteDelivery} = require('../controllers/delivery/deleteDelivery')


router.get('/getAll', middlewareRol.validateRol, getAllDelivery)
router.get('/detailDelivery', middleware.validateAccess, getDelivery)
router.post('/createDelivery', middleware.validateData, postDelivery) 
router.put('/newStatusDelivery', middlewareRol.validateRol, putDelivery)
router.delete('/deleteDelivery', middlewareRol.validateRol, deleteDelivery)



module.exports = router;