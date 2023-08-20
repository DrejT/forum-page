const express = require("express");
const router = express.Router();
const Comment = require("./../models/comment")

// get all comments
router.get("/", async (req,res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({message:err.error});
    }
})

// get a particular comment
router.get("/:id", getComment, async (req,res) => {
    res.send(res.comment);
})

// create a new comment
router.post("/", async (req,res) => {
    const comment = await Comment.create({
        "comment": req.body.comment,
        "author": req.body.author,
        "post":req.body.post,
    });
    try {
        const newComment = await comment.Save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(400).json({message:err.error});
    }
})

// update the category of a comment
router.patch("/:id", getComment, async (req,res) => {
    if (req.body.comment != null){
        res.comment.comment = req.body.comment;
    }
    try {
        const updatedComment = await res.comment.save();
        res.status(200).json(updatedComment);
    } catch (err) {
        res.status(400).json({message:err.message})
    }
})

// dekete an existing comment
router.delete("/:id", getComment, async (req,res) => {
    try {
        await res.comment.deleteOne({id:req.params.id});
        res.json({message:"comment deleted"});
    } catch (err) {
        res.status(500).json({message:err.message});
    }
})

async function getComment(req, res, next) {
    let comment
    try {
        comment = await Comment.findById(req.params.id);
        if (comment == null){
            return res.status(404).json({message:"comment not found"});
        }
    } catch (err) {
        return res.status(500).json({message:"internal server error"});
    }
    res.comment = comment;
    next()
}


module.exports = router;