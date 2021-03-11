const express = require("express")
const router = express.Router()
const applicantSchemaCopy = require('../models/ApplicantModels')
const educationSchemaCopy = require('../models/EducationModels')
const experienceSchemaCopy = require('../models/ExperienceModels')

router.post('/applicantDetails', (req,res) => {
    const applicantDetails =  new applicantSchemaCopy({
        firstName:  req.body.firstName,
        lastName: req.body.lastName,
        mobileNo: req.body.mobileNo,
        gender: req.body.gender
    })
    applicantDetails.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err);
    })
})

router.post('/educationDetails', (req,res) => {
    const applicantEducation =  new educationSchemaCopy({
        eduType:  req.body.eduType,
        percentageMarks: req.body.percentageMarks,
        courseDuration: req.body.courseDuration,
        courseStarted: req.body.courseStarted,
        courseEnded: req.body.courseEnded
    })
    applicantEducation.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err);
    })
})

router.post('/experienceDetails', (req,res) => {
    const applicantExperience =  new experienceSchemaCopy({
        company:  req.body.company,
        jobTitle: req.body.jobTitle,
        yearsOfExp: req.body.yearsOfExp,
        expStarted: req.body.expStarted,
        expEnded: req.body.expEnded
    })
    applicantExperience.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err);
    })
})

module.exports = router