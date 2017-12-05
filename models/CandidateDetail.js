var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CandidateDetailSchema = Schema({
    title: {type: String, required: true},
    user: { type: Schema.ObjectId, ref: 'User', required: true },
    summary: {type: String, required: true},
    noticeperiod: {type: String, required: true},
    jobdesc: {type: String, required: true},
});



//Export model
module.exports = mongoose.model('CandidateDetail', CandidateDetailSchema);
