const mongoose=require("mongoose")

let schemaBooking=new mongoose.Schema({
     name:{
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

const Booking=mongoose.model("Booking",schemaBooking)
const Recycle=mongoose.model("Recycle",schemaBooking)

module.exports={Booking,Recycle}

