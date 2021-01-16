const express=require("express")

const deleteController=require("../controllers/controller.delete")

const router=express.Router()

router.route("/delete/:id?")
     .delete(deleteController.delete)

module.exports=router