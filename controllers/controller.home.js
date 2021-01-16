
const Booking=require("../models/Booking")

function errorConnect(){
    req.flash("error","xin lỗi chưa thể connect dc vào Booking")
    res.redirect('/')
}

module.exports={
    get:function(req,res){
        let search=req.query.search
        if(search===undefined){
            Booking.find({}).exec((err,result)=>{
                if(err){
                    errorConnect()
                }else{
                    res.render("homes/home",{title:"KHÁCH HÀNG ĐẶT SÂN",data:result.reverse()});
                }
            })
        }else if(isNaN(search)){
            if(isNaN(search[0])){
                let a=new RegExp(search,"i")
                Booking.find({name:{$regex:a}},(err,result)=>{
                    if(err){
                        errorConnect()
                    }else{
                        res.render("homes/home",{title:"KHÁCH HÀNG ĐẶT SÂN",data:result.reverse()});
                    }
                })
            }else{
                let bool=false
                let char=""
                for(let i=0;i<search.length;i++){
                    if(search[i]==="/"||search[i]==="."||search[i]==="-"){
                        bool=true
                        char=search[i]
                    }
                }
                if(bool===true){
                    let value=search.split(char).reverse().join("-")
                    let a=new RegExp(value,"i")
                    Booking.find({date:{$regex:a}},(err,result)=>{
                        if(err){
                            errorConnect()
                        }else{
                            res.render("homes/home",{title:"KHÁCH HÀNG ĐẶT SÂN",data:result.reverse()});
                        }
                    })
                }
                if(bool===false){
                    let a=new RegExp(search,"i")
                    Booking.find({time:{$regex:a}},(err,result)=>{
                        if(err){
                            errorConnect()
                        }else{
                            res.render("homes/home",{title:"KHÁCH HÀNG ĐẶT SÂN",data:result.reverse()});
                        }
                    })
                }

            }
        }else if(!isNaN(search)){
            if(search.length<=1){
                let value=Number(search)
                Booking.find({chonsan:value},(err,result)=>{
                    if(err){
                        errorConnect()
                    }else{
                        res.render("homes/home",{title:"KHÁCH HÀNG ĐẶT SÂN",data:result.reverse()});
                    }
                })
            }else{
                let a=new RegExp(search,"i")
                console.log(a)
                Booking.find({phone:{$regex:a}},(err,result)=>{
                    if(err){
                        errorConnect()
                    }else{
                        res.render("homes/home",{title:"KHÁCH HÀNG ĐẶT SÂN",data:result.reverse()});
                    }
                })
            }
        }
    }
}

