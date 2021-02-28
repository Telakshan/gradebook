const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    
})