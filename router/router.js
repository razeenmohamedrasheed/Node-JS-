'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.get('/user',controller.getUserData)
router.post('/user',controller.createUserData)
router.get('/user/:first_name',controller.getInidivisualUserData)
router.delete('/user/:first_name',controller.deleteInidivisualUserData)
router.put('/user/:name',controller.updateUserData)

module.exports  = router