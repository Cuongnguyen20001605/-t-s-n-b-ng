const express=require('express')
const controllerCreate=require('../controllers/controller.create')
const routers=express.Router()

routers.route('/create')
     .get(controllerCreate.get)
     .post(controllerCreate.post)

module.exports=routers  