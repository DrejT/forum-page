const { default: mongoose } = require("mongoose");

const postSchema = new mongoose.Schema({
    title:      { type: String, required: true },
    content:    { type: String, required: true },
    author:     { type: mongoose.Schema.Types.ObjectId, ref:"User", required: true},
    thread:     { type: mongoose.Schema.Types.ObjectId, ref:"Thread", required: true },
    vote:       [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    createdAt:  { type: Date, default: Date.now },
    published:  { type: Boolean, default:true}
});

module.exports = mongoose.model("Post", postSchema)