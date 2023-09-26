const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true},
    author: { type: mongoose.Schema.Types.ObjectId, ref:"User"},
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    slug: { type: String },
    createdAt: { type: Date, default: Date.now },
});

// threadSchema.pre('remove', function (next) {
//     const thread = this;

//     // Find the section that contains the thread and remove the thread's ID from the section's threads array
//     Section.updateOne(
//         { _id: thread.section }, // Assuming you have a 'section' field in your Thread model to reference the section
//         { $pull: { threads: thread._id } },
//         (err) => {
//             if (err) {
//                 return next(err);
//             }
//             next();
//         }
//     );
// });

module.exports = mongoose.model("Thread", threadSchema);