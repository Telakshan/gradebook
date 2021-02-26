const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    }
    , 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    addeddate: {
        type: Date,
        default: Date.now
    },
    assignments: [
        {
            name:{
                type: String
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
            addeddate:{
                type: Date,
                default: Date.now
            }


        }
    ]

});

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;