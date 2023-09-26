const express = require("express");
const router = express.Router();
const Thread = require("./../models/thread");
const User = require("./../models/user");
const { validateRole } = require("../utils/validate");
const { Section } = require("../models/section");

// get all threads
router.get("/", async (req, res) => {
    try {
        const threads = await Thread.find();
        res.json(threads)
    } catch (err) {
        res.status(500).json({ message: err.error });
    }
})

// get a particular thread
router.get("/:id", getThread, async (req, res) => {
    res.send(res.thread)
})

// create a new thread
router.post("/", async (req, res) => {
    const isAdmin = await validateRole(req.body.authorId);
    if (isAdmin) {
        const thread = await Thread.create({
            "title": req.body.title,
            "description": req.body.description,
            "author": req.body.authorId,
            "slug": req.body.title.split(" ").join("-")
        });
        try {
            const newThread = await thread.save();
            console.log("the thread is", newThread);

            // save the new thread on the given user
            const user = await User.findById(req.body.authorId);
            user.thread.push(newThread);
            await user.save();
            // save the new thread on the given section
            const section = await Section.findOne({ name: req.body.section });
            section.thread.push(newThread);
            await section.save();

            res.status(201).json({ newThread: newThread, message: "thread created" });
        } catch (err) {
            res.status(400).json({ message: err.error });
        }
    }
    else {
        return res.status(400).json({ message: "you do not have the permission or a thread with the name already exists" });
    }
})

// update the category of a thread
router.patch("/:id", getThread, async (req, res) => {
    console.log("body is", req.body);
    if (req.body.title != null) {
        res.thread.title = req.body.title;
    }
    if (req.body.description != null) {
        res.thread.description = req.body.description;
    }
    // refactoring required for section exist bool
    // const sectionExistBool = req.body.section?await sectionExists(req.body.section):false;
    // if (sectionExistBool){
    // }
    try {
        const updatedThread = await res.thread.save();
        console.log("updated thread is ", updatedThread);
        res.status(200).json(updatedThread);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// dekete an existing thread
router.delete("/:id", getThread, async (req, res) => {
    try {
        await res.thread.deleteOne({ id: req.params.id });
        res.json({ message: "thread deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

async function getThread(req, res, next) {
    let thread
    try {
        thread = await Thread.findById(req.params.id);
        if (thread == null) {
            return res.status(404).json({ message: "thread not found" });
        }
    } catch (err) {
        return res.status(500).json({ message: "internal server error" });
    }
    res.thread = thread;
    next()
}


module.exports = router;