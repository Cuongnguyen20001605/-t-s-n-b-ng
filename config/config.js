
require('dotenv').config()

const config={
    PORT:process.env.PORT,
    DATABASE:{
        PORT:process.env.URI
    }
}

module.exports=config