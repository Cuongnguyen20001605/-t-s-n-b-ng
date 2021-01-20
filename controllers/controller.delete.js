
const {Booking,Recycle}=require('../models/Booking')
module.exports ={
      delete:async function(req,res){
          await Booking.findById({_id:req.query.id},(err,result)=>{
               if(err){
                    req.flash('error','xin lỗi chưa thể connect dc Booking')
                    res.redirect('/') 
               }
               if(result){
                    new Recycle({  
                         name:result.name,
                         phone:result.phone,
                         time:result.time,
                         date:result.date,
                         chonsan:result.chonsan}).save((err,result)=>{
                              if(err){console.log(err)}
                              if(result){console.log("ok")}
                    })
                    Booking.deleteOne(result).exec((err,result)=>{
                         if(err){
                              req.flash('error','xin lỗi chưa thể delete xóa booking')
                              res.redirect('/') 
                         }
                         if(result){
                              res.status(200).json({success:"đã xóa thành công"})
                         }
                    })
               }
          })
     }
}


