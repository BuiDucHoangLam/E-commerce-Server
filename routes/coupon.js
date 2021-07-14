const express = require('express')
const router = express.Router()

const { authCheck,adminCheck } = require('../Middleware/auth')

const {create,remove,list} = require('../controller/coupon')

router.post('/coupon',authCheck,adminCheck,create)
router.get('/coupons',list)
router.delete('/coupon/:couponId',authCheck,adminCheck,remove)

module.exports = router