const mongoose = require("mongoose");

const SectionSchema = new mongoose.Schema({
    name:       { type: String, required: true , trim:true, minlength: 3, maxlength: 30},
    author:     { type: mongoose.Schema.Types.ObjectId, ref:"User" },
    thread:     [{ type: mongoose.Schema.Types.ObjectId, ref:"Thread" }],
    createdAt:  { type: Date, default: Date.now },
});

module.exports = mongoose.model("Section", SectionSchema);