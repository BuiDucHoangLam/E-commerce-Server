const express = require('express')
const router = express.Router()

const {create,list,read,update,remove} = require('../controller/category')
const { authCheck,adminCheck } = require('../Middleware/auth')

router.post('/category',authCheck,adminCheck,create)
router.get('/category',list)
router.get('/category/:slug',read)
router.put('/category/:slug',authCheck,adminCheck,update)
router.delete('/category/:slug',authCheck,adminCheck,remove)

module.exports = router