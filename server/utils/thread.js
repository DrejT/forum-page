const Thread = require("./../models/thread")

async function fetchThreadBySlug(slug){
    try {
        const thread = await Thread.findOne({slug:slug}).populate("posts");
        return thread;
    } catch (err) {
        return false
    }
}

async function fetchThreadById(id){
    try {
        const thread = await Thread.findById(id);
        return thread;
    } catch (err) {
        return false
    }
}

module.exports = {
    fetchThreadById,
    fetchThreadBySlug
}