const mongoose = require('mongoose');

const StudentProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    college: {
        type: String,
        required: true
    },
    gradeLevel: {
        type: String
    }, 
    major: {
        type: String
    },
    shortBio: {
        type: String
    }
});

const StudentProfile = mongoose.model('StudentProfile', StudentProfileSchema);
module.exports = StudentProfile;