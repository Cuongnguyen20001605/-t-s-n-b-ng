
const {Booking}=require("../models/Booking")

module.exports={
     get:async function(req,res){
          await Booking.findById({_id:req.query.id}).exec((err,result)=>{
               if(err){
                    req.flash("error","xin lỗi chưa lấy được dữ liệu")
                    res.redirect('/')
               }else{
                    res.send(result)
               }
          })
     },
     post:async function(req,res){
          let updateBooking=req.body
          await Booking.find({
               date:updateBooking.data,
               chonsan:updateBooking.chonsan,
               time:updateBooking.time
          }).exec((err,result)=>{
              if(err){
                    req.flash("error","xin lỗi chưa lấy được dữ liệu")
                    res.redirect('/')
              }else{
                   if(result==0){
                        Booking.updateOne({
                             _id:req.query.id},{
                              name:req.body.name,
                              phone:req.body.phone,
                              date:req.body.lichda,
                              sanbong:req.body.chonsan
                         }).exec((err)=>{
                              if(err){
                                   req.flash("error","xin lỗi dữ liệu chưa dc update")
                                   res.redirect('/')
                              }else{
                                   req.flash("success","bạn đã cập nhật thành công !!!")
                                   res.redirect('/')
                              }
                         })
                   }else{
                         req.flash("error",`xin lỗi!!ngày ${updateBooking.lichda.split("-").reverse().join("/")} đã có người chọn sân ${updateUser.chonsan}`)
                         res.redirect("/")
                   }
              }
         })
     }
}
