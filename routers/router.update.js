const express=require("express");
const controllerUpdate=require("../controllers/controller.update");


const router=express.Router();

router.route("/update/:id?")
     .get(controllerUpdate.get)
     .post(controllerUpdate.post)

module.exports=router;
