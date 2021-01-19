
const Booking=require("../models/Booking")

let create={
     get:function(req,res){
          res.render('create',{
               title:"Đặt sân bóng"
          })
     },
     post:async function(req,res){
          let dulieu=req.body
          await Booking.find({date:dulieu.date,chonsan:dulieu.chonsan,time:dulieu.time})
          .exec((err,result)=>{
               if(err){
                    req.flash('error','xin loi data tam thoi khong load dc')
                    res.redirect('/')
               }else{
                    if(result==0){
                         new Booking({
                             name:dulieu.name,
                             phone:dulieu.phone,
                             time:dulieu.time,
                             date:dulieu.date,
                             chonsan:dulieu.chonsan
                        }).save((err)=>{
                             if(err){
                                   req.flash('error','xin loi du lieu chua dc luu moi ban nhap lai')
                                   res.render('/create')
                             }else{
                                   req.flash('success','da luu thanh cong')
                                   res.redirect('/')
                             }
                        })
                   }else{
                         req.flash('error','xin lỗi thòi gian này đã có người đặt sân rồi rồi')
                         res.redirect('/')
                   }
               }
          })
     }
}


module.exports=create