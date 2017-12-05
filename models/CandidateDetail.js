var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CandidateDetailSchema = Schema({
    title: {type: String, required: true},
    user: { type: Schema.ObjectId, ref: 'User', required: true },
    firstname: {type: String, required: true},
    middleName: {type: String, required: true},
    lastName: {type: String, required: true},
    company: {type: String, required: true},
    street1: {type: String, required: true},
    street2: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: Number, required: true},
    country: {type: String, required: true},
    jobtitle: {type: String, required: true},
    jobcompany: {type: String, required: true},
    jobdivision: {type: String, required: true},
    jobctc: {type: Number, required: true},
    jobUSP: {type: String, required: true},
    jobnotis: {type: Number, required: true},
    prefloc: {type: String, required: true},
    prefcity: {type: String, required: true},
    prefzip: {type: String, required: true},
    stsskills: {type: String, required: true},
    stsjob: {type: String, required: true},
    stsreason: {type: String, required: true} 
});



//Export model
module.exports = mongoose.model('CandidateDetail', CandidateDetailSchema);
