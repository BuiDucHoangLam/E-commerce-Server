const express = require('express')
const router = express.Router()

const {create,list,read,update,remove,readId} = require('../controller/product')
const { authCheck,adminCheck } = require('../Middleware/auth')

router.post('/product',authCheck,adminCheck,create)
router.get('/product',read)


module.exports = router