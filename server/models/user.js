const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    post: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    draft: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    section: [{ type: mongoose.Schema.Types.ObjectId, ref: "Section" }],
    thread: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thread' }],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("user", userSchema)