const mongoose = require("mongoose")
const Schema = mongoose.Schema

const educationSchema = new Schema({
    eduType: {
        type: String,
        required: true
    },
    percentageMarks: {
        type:Number,
        required: true
    },
    courseDuration: {
        type: Number,
        required: true
    },
    courseStarted: {
        type: Date,
        required: true
    },
    courseEnded: {
        type: Date,
        required: true
    },
    applId : {
        type: String,
        required: true
    }
})

const Education = mongoose.model('Education',educationSchema) 
module.exports = Education
