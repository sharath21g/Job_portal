const mongoose = require("mongoose")
const Schema = mongoose.Schema

const applicantSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type:String,
        required: true
    },
    mobileNo: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Applicant = mongoose.model('Applicant',applicantSchema)
module.exports = Applicant

