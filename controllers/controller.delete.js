
const Booking=require('../models/Booking')
module.exports ={
      delete:async function(req,res){
          await Booking.findById({_id:req.query.id}).exec((err,result)=>{
               if(err){
                    req.flash('error','xin lỗi chưa thể connect dc Booking')
                    res.redirect('/') 
               }else{
                    Booking.deleteOne(result,(err)=>{
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


