const express = require("express")
const router = express.Router()
let Applicant = require('../models/AdminModels');

router.route('/').get((req,res) => {
    Applicant.find()
    .then(applicant => res.json(applicant))
    .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/:id').get((req,res) => {
    Applicant.findById(req.params.id)
    .then(applicant => res.json(applicant))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').delete((req,res) => {
    Applicant.findByIdAndDelete(req.params.id)
    .then(exercise => res.json('Applicant deleted'))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/update/:id').post((req,res) => {
    Applicant.findById(req.params.id)
    .then(applicant => {
    applicant.username = req.body.username;
    applicant.description = req.body.description;
    applicant.duration = Number(req.body.duration);
    applicant.date = Date.parse(req.body.date);
    applicant.save()
    .then(() => res.json('Applicant updated !'))
    .catch(err => res.status(400).json('Error: '+err));
    })
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;
