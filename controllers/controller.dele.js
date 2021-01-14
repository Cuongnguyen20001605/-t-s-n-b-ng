const data=require('../models/database');
let dele={
      dele:async function(req,res){
          await data.findById({_id:req.query.id}).exec((err,result)=>{
               if(err){
                    console.log(err);
               }else{
                    data.deleteOne(result,(err,result)=>{
                         if(err){
                              console.log(err);
                         }else{
                              res.send("ok");
                         }
                    })
               }
          })
      }
}

module.exports=dele;


