const express=require("express")
const controllerRecycle=require("../controllers/controller.recycle")
const router=express.Router()

router.route("/recycle")
     .get(controllerRecycle.get)

module.exports=router