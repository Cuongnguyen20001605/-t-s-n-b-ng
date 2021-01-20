
const {Booking,Recycle}=require('../models/Booking')
module.exports ={
      delete:async function(req,res){
          await Booking.findById({_id:req.query.id}).exec((err,result)=>{
               if(err){
                    req.flash('error','xin lỗi chưa thể connect dc Booking')
                    res.redirect('/') 
               }else{
                    Booking.deleteOne(result,(err)=>{
                         new Recycle({
                              _id:result._id,
                              name:result.name,
                              phone:result.phone,
                              time:result.time,
                              date:result.date,
                              chonsan:result.chonsan
                         }).exec((err,result)=>{
                              if(err){
                                   console.log(err)
                              }else{
                                   console.log("ok")
                              }
                         })
                         if(err){
                              req.flash('error','xin lỗi chưa thể xóa được dữ liệu mời lm lại')
                              res.redirect('/')
                         }
                         res.status(200).json({success:"đã xóa thành công"})
                    })
               }
          })
     }
}


