const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true},
    author: { type: mongoose.Schema.Types.ObjectId, ref:"User"},
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Thread", threadSchema);