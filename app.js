const express=require('express')
const mongoose=require("mongoose")
const session=require("express-session")
const cookieParser=require("cookie-parser")
const path=require('path')
const app=express()

//config app
const config=require('./config/config')

//setup ejs
app.set("view engine","ejs")
app.set("views","./views")

//setup file static
app.use('/static', express.static(path.join(__dirname, 'public')))

//setup bodyparser
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//set cookie
app.use(cookieParser())

//setup express-session
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
  }))

//setup express-messages conect-flash
app.use(require('connect-flash')())
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res)
  next()
})

//setup mongoose
mongoose.connect(
    config.DATABASE.PORT, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err)=>{
        if(err){
            console.log(err)
        }
        console.log("connect mongdb...")
    }
)

//router app
app.use('/',require('./routers/router.home'))


//router create san bong
app.use('/',require("./routers/router.create"))


//update Booking
app.use('/',require("./routers/router.update"))

//delete booking
app.use("/",require("./routers/router.delete"))

//recycle booking
  app.use("/",require("./routers/router.recycle"))

//catch errors router
app.use(function(req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
})

app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.render('error/error', {
        message: err.message,
        title:"ĐƯỜNG LINK KHÔNG TỒN TẠI!!"
    })
})


app.get((req,res)=>{
    res.render(admin,{data:data});
})

app.listen(config.PORT,()=>console.log("start server"))