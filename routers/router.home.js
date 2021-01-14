const express=require('express')

const controllerHome=require('../controllers/controller.home')

const routers=express.Router()

routers.route('/')
    .get(controllerHome.get)

module.exports=routers