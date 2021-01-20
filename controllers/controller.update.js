
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
          const updateBooking=req.body
          await Booking.find({date:updateBooking.date,time:updateBooking.time,chonsan:updateBooking.chonsan})
          .exec((err,result)=>{
               if(err){
                    req.flash('error','xin lỗi không load dc data')
                    res.redirect('/')
               }
               if(result!=0){
                    req.flash('error','xin lỗi thời gian này đã có người đặt')
                    res.redirect('/')
               }else{
                    Booking.updateOne(
                         {_id:req.query.id},
                         {
                              _id:req.query.id,
                              name:updateBooking.name,
                              phone:updateBooking.phone,
                              date:updateBooking.date,
                              time:updateBooking.time,
                              chonsan:updateBooking.chonsan     
                         }
                    ).exec((err,result)=>{
                         if(err){
                              req.flash('error','xin lỗi update không thành công')
                              res.redirect('/')
                         }
                         if(result){
                              req.flash('success','đã update thành công')
                              res.redirect('/')
                         }
                    })
               }
          })
     }
}
