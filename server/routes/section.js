const express = require("express");
const router = express.Router();
const Section = require("./../models/section")

// get all sections
router.get("/", async (req,res) => {
    try {
        const sections = await Section.find();
        res.json(sections);
    } catch (err) {
        res.status(500).json({message:err.error});
    }
})

// get a particular section
router.get("/:id", getSection, async (req,res) => {
    res.send(res.section);
})

// create a new section
router.post("/", async (req,res) => {
    const section = await Section.create({
        "name": req.body.name,
        "author": req.body.author,
        "thread":req.body.thread,
    });
    try {
        const newSection = await Section.Save();
        res.status(201).json(newSection);
    } catch (err) {
        res.status(400).json({message:err.error});
    }
})

// update the name of a section
router.patch("/:id", getSection, async (req,res) => {
    if (req.body.name != null){
        res.section.name = req.body.name;
    }
    try {
        const updatedSection = await res.Section.save();
        res.status(200).json(updatedSection);
    } catch (err) {
        res.status(400).json({message:err.message})
    }
})

// dekete an existing section
router.delete("/:id", getSection, async (req,res) => {
    try {
        await res.Section.deleteOne({id:req.params.id});
        res.json({message:"Section deleted"});
    } catch (err) {
        res.status(500).json({message:err.message});
    }
})

async function getSection(req, res, next) {
    let section
    try {
        section = await Section.findById(req.params.id);
        if (section == null){
            return res.status(404).json({message:"section not found"});
        }
    } catch (err) {
        return res.status(500).json({message:"internal server error"});
    }
    res.section = section;
    next()
}


module.exports = router;