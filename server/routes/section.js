const express = require("express");
const router = express.Router();
const { Section } = require("./../models/section");
const { validateRole } = require("../utils/validate");
const User = require("./../models/user");
const { sectionExists } = require("./../utils/section");

// get all sections
router.get("/", async (req, res) => {
    try {
        const sections = await Section.find();
        res.json(sections);
    } catch (err) {
        res.status(500).json({ message: err.error });
    }
})

// get a particular section
router.get("/:id", getSection, async (req, res) => {
    res.send(res.section);
})

// create a new section
router.post("/", async (req, res) => {
    const isAdmin = await validateRole(req.body.authorId);
    const nameExists = typeof req.body.name !== "string" ? false : await sectionExists(req.body.name);
    if (isAdmin &&
        !nameExists) {
        const section = await Section.create({
            "name": req.body.name,
            "authorId": req.body.authorId,
        });
        try {
            const newSection = await section.save();

            // save the section on the user object
            const user = await User.findById(req.body.authorId);
            user.section.push(newSection);
            await user.save();

            return res.status(201).json({ section: newSection, message: "section created successfully" });
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    } else {
        return res.status(400).json({ message: "you do not have the permission or a section with the name already exists" })
    }

})

// update the name of a section
router.patch("/:id", getSection, async (req, res) => {
    if (req.body.name != null && req.body.name.length > 3) {
        res.section.name = req.body.name;
    } else {
        return res.json({message:"name should be longer than 3 letters"})
    }
    try {
        const updatedSection = await res.section.save();
        res.status(200).json(updatedSection);
    } catch (err) {
        res.status(400).json({ message: err.message })
    } 
})

// dekete an existing section
router.delete("/:id", getSection, async (req, res) => {
    try {
        await res.section.deleteOne({ id: req.params.id });
        res.json({ message: "Section deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

async function getSection(req, res, next) {
    let section;
    try {
        section = await Section.findById(req.params.id);
        
        if (section == null) {
            return res.status(404).json({ message: "section not found" });
        }
    } catch (err) {
        return res.status(500).json({ message: "internal server error" });
    }
    res.section = section;
    next()
}


module.exports = router;