const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    avatar: {
        type: Buffer
    },
    likes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            },
            
        }
        
    ],
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            },
            text: {
                type: String,
                required: true
            }, 
            name: {
                type: String
            },
            avatar: {
                type: Buffer
            }
        }
    ],
            date: {
                type: Date,
                default: Date.now
            }

})

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
