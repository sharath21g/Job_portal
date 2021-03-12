const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const applicantRoute = require('./routes/applicantroutes')
const adminRoute = require('./routes/applicantroutes')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => {
    console.log("Database Connected");
})

app.use(express.json())
app.use(cors())
app.use('/app',applicantRoute)
app.use('/admin',adminRoute)


app.listen(4000,() => {
    console.log("server is running");
})