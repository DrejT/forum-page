const express = require("express");
const router = express.Router();
const Thread = require("./../models/thread");

// get all threads
router.get("/", async (req,res) => {
    try {
        const threads = await Thread.find();
        res.json(threads)
    } catch (err) {
        res.status(500).json({message:err.error});
    }
})

// get a particular thread
router.get("/:id", getThread, async (req,res) => {
    res.send(res.thread)
})

// create a new thread
router.post("/", async (req,res) => {
    const thread = await Thread.create({
        "title": req.body.title,
        "creator": req.body.creator,
        "category": req.body.category
    });
    try {
        const newThread = await thread.Save();
        console.log(newThread);
        res.status(201).json({message:"thread created"});
    } catch (err) {
        res.status(400).json({message:err.error});
    }
})

// update the category of a thread
router.patch("/:id", getThread, async (req,res) => {
    console.log("body is", req.body);
    if (req.body.title != null){
        res.thread.title = req.body.title;
    }
    if (req.body.category != null){
        res.thread.category = req.body.category;
    }
    try {
        const updatedThread = await res.thread.save();
        console.log("updated thread is ",updatedThread);
        res.status(200).json(updatedThread);
    } catch (err) {
        res.status(400).json({message:err.message})
    }
})

// dekete an existing thread
router.delete("/:id", getThread, async (req,res) => {
    try {
        await res.thread.deleteOne({id:req.params.id});
        res.json({message:"thread deleted"});
    } catch (err) {
        res.status(500).json({message:err.message});
    }
})

async function getThread(req, res, next) {
    let thread
    try {
        thread = await Thread.findById(req.params.id);
        if (thread == null){
            return res.status(404).json({message:"thread not found"});
        }
    } catch (err) {
        return res.status(500).json({message:"internal server error"});
    }
    res.thread = thread;
    next()
}


module.exports = router;