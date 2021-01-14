const express=require("express");

const deleController=require("../controllers/controller.dele");

const router=express.Router()

router.route("/delete/:id?")
     .delete(deleController.dele)


module.exports=router;