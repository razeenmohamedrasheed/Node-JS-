const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router/router')
const morgan = require('morgan')

const app = express()
const PORT= 8000
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/',router)

app.listen(PORT,(error,success)=>{
    if(error){
        console.log(error)
        return
    }
    console.log(`server is running on port ${PORT}:success`)
})
