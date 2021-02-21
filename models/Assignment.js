const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'user'
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    name: {
        type: String,
        require: true
    }, 
    completed: {
        type: Boolean,
        default: false
    },
    duedate:{
        type: Date
    },
    percentage: {
        type: Number
    }, 
    grade: {
        type: Number
    },
    addeddate: {
        type: Date,
        default: Date.now
    }
});

const Assignment = mongoose.model('Assignment', AssignmentSchema);
module.exports = Assignment;