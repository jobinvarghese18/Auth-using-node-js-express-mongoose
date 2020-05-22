const express = require('express')
const port = 3050
const app = express()


app.use(express.json())

//setupDB
const configureDB = require('./config/database')
configureDB()

const routes = require('./config/routes')
app.use('/',routes)

app.listen(port,()=>{
    console.log('Listening to port ',port)
})