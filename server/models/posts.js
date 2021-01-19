const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    title: {type:String, required:[true, "title is missing"] },
    description: String,
    user: String,
    img: String,
    date: {
        type: Date,
        default: new Date()
    }
    
})
const Post = mongoose.model('Post', postSchema)
module.exports = Post