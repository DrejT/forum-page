const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true},
    author: { type: mongoose.Schema.Types.ObjectId, ref:"User"},
    createdAt: { type: Date, default: Date.now },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
});

module.exports = mongoose.model("Thread", threadSchema);