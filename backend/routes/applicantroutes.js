const express = require("express")
const router = express.Router()
const Applicant  = require('../models/ApplicantModels')
const Education = require('../models/EducationModels')
const Experience = require('../models/ExperienceModels')

router.post('/applicantDetails', (req,res) => {
    const applicantDetails =  new Applicant({
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
    const applicantEducation =  new Education({
        eduType: req.body.eduType,
        percentageMarks: req.body.percentageMarks,
        courseDuration: req.body.courseDuration,
        courseStarted: req.body.courseStarted,
        courseEnded: req.body.courseEnded,
        applId: req.body.applId
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
    const applicantExperience =  new Experience({
        company:  req.body.company,
        jobTitle: req.body.jobTitle,
        yearsOfExp: req.body.yearsOfExp,
        expStarted: req.body.expStarted,
        expEnded: req.body.expEnded,
        applId: req.body.applId
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