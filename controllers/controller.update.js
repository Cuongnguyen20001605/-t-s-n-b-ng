
const data=require("../models/database");

let update={
     get:async function(req,res){
          await data.findById({_id:req.query.id}).exec((err,result)=>{
               if(err){
                    console.log(err);
               }else{
                    res.send(result);
               }
          })
     },
     post:async function(req,res,next){
          let updateUser=req.body;
          await data.find({
               date:updateUser.data,
               chonsan:updateUser.chonsan,
               time:updateUser.time
          }).exec((err,result)=>{
              if(err){
                   console.log(err);
              }else{
                   if(result==0){
                        data.updateOne({
                             _id:req.query.id},{
                              username:req.body.username,
                              phone:req.body.phone,
                              date:req.body.lichda,
                              sanbong:req.body.chonsan
                         }).exec((err)=>{
                              if(err){
                                   req.flash("error","xin lỗi dữ liệu chưa dc update")
                                   res.redirect('/');
                              }else{
                                   req.flash("success","bạn đã cập nhật thành công !!!")
                                   res.redirect('/');
                              }
                         })
                   }else{
                         req.flash("error",`xin lỗi!!ngày ${updateUser.lichda.split("-").reverse().join("/")} đã có người chọn sân ${updateUser.chonsan}`)
                         res.redirect("/");
                   }
              }
         })
     }
}

module.exports=update;