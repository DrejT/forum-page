const { default: mongoose } = require("mongoose");

const commentSchema = new mongoose.Schema({
    comment: { type: String, required: true },
    author: { type: String, required: true },
    post: { type: String, required: true },
    vote: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comment", commentSchema);