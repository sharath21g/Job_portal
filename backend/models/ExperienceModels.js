const mongoose = require("mongoose")
const Schema = mongoose.Schema

const experienceSchema = new Schema({
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
    applId : {
        type: String,
        required: true
    }
})

const Experience = mongoose.model('Experience',experienceSchema)
module.exports = Experience