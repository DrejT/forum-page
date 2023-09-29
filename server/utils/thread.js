const Thread = require("./../models/thread")

async function fetchThread(slug){
    try {
        const thread = await Thread.findOne({slug:slug});
        return thread;
    } catch (err) {
        return false
    }
}

module.exports = {
    fetchThread
}