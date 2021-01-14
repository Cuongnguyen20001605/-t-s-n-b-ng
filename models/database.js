const mongoose=require("mongoose");

let database=mongoose.Schema({
     username:{
          type:String,
          require:true
     },
     phone:{
          type:String,
          require:true
     },
     time:{
          type:String,
          require:true
     },
     date:{
          type:String,
          require:true
     },
     chonsan:{
          type:Number,
          require:true
     }
});

const data=mongoose.model("Data",database);

module.exports=data;