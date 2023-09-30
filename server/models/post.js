const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: [{ type: String }],
    author: { type: String, required: true },
    slug: { type: String, required: true },
    sticky: { type: Boolean, default: false },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    upvote: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    downvote: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", postSchema)