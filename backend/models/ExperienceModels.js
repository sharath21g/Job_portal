const mongoose = require("mongoose")

const experienceSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    jobTitle: {
        type:String,
        required: true
    },
    yearsOfExp: {
        type: Number,
        required: true
    },
    expStarted: {
        type: Date,
        required: true
    },
    expEnded: {
        type: Date,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('experience_table',experienceSchema)