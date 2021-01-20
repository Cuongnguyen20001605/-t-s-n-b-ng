const {Recycle}=require("../models/Booking")

module.exports={
     get:function(req,res){
          Recycle.find({}).exec((err,result)=>{
               if(err){
                    req.flash('error','xin loi data tam thoi khong load dc')
                    res.redirect('/')
               }else{
                    res.render("recycle",{data:result,title:"THÙNG RÁC"})
               }
          })
     }
}