const express = require("express");
const router = express.Router();
const Post = require("./../models/post");
const { fetchUser } = require("../utils/validate");
const { fetchThreadById } = require("../utils/thread");

// get all posts
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (err) {
        res.status(500).json({ message: err.error });
    }
})

// get a particular post
router.get("/:id", getPost, async (req, res) => {
    res.send(res.post);
})

// create a new post
router.post("/", async (req, res) => {
    const postUser = await fetchUser(req.body.authorId);
    const thread = typeof req.body.threadId === "string"? await fetchThreadById(req.body.threadId):false;
    console.log("the body is ",req.body);
    if (postUser && thread) {
        const post = await Post.create({
            "title": req.body.title,
            "content": req.body.content,
            "author": postUser.username,
            "authorId": req.body.authorId,
            "sticky": postUser.role === "admin" ? req.body.sticky : false,
            "draft": req.body.draft,
            "slug": req.body.title.split(" ").join("-"),
        });
        try {
            const newPost = await post.save();

            thread.posts.push(newPost);
            postUser.post.push(newPost);
            await thread.save();
            await postUser.save();
            res.status(201).json(newPost);
        } catch (err) {
            res.status(400).json({ message: err.error });
        }
    } else {
        return res.status(404).json({message:"post not created"});
    }
})

// update the category of a post
router.patch("/:id", getPost, async (req, res) => {
    if (req.body.title != null) {
        res.post.title = req.body.title;
    }
    if (req.body.content != null) {
        res.post.content = req.body.content;
    }
    if (req.body.thread != null) {
        res.post.thread = req.body.thread;
    }
    try {
        const updatedPost = await res.post.save();
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// dekete an existing post
router.delete("/:id", getPost, async (req, res) => {
    try {
        await res.post.deleteOne({ id: req.params.id });
        res.json({ message: "post deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

async function getPost(req, res, next) {
    let post
    try {
        post = await Post.findById(req.params.id);
        if (post == null) {
            return res.status(404).json({ message: "post not found" });
        }
    } catch (err) {
        return res.status(500).json({ message: "internal server error" });
    }
    res.post = post;
    next()
}


module.exports = router;