const mongoose=require("mongoose");

let history=mongoose.Schema({
     username:{
          type:String,
          require:true
     },
     phone:{
          type:String,
          require:true
     },
     date:{
          type:String,
          require:true
     },
     sanbong:{
          type:Number,
          require:true
     }
});

const data=mongoose.model("History",history);

module.exports=data;