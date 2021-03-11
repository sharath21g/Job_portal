const mongoose = require("mongoose")

const educationSchema = new mongoose.Schema({
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
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('education_table',educationSchema)