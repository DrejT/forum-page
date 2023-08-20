const { default: mongoose } = require("mongoose");

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },  // { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    thread: { type: String, required: true },
    vote: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", postSchema)